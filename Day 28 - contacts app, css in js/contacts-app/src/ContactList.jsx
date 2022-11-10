import { css } from "@emotion/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function ContactList({ searchText }) {
  console.log(searchText);
  const contacts = useLoaderData() ?? [];
  const filteredContacts = contacts.filter((contact) => {
    const { first, last } = contact.name;
    return (
      first.toLowerCase().includes(searchText.toLowerCase()) || last.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  console.log(contacts);
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
      `}
    >
      {filteredContacts?.length
        ? filteredContacts.map((contact) => {
            const {
              id: { value },
              name: { first, last },
            } = contact;
            return (
              <li key={value}>
                <NavLink
                  css={css({
                    display: "block",
                    padding: "4px 8px",
                    textDecoration: "none",
                    color: "royalblue",
                    "&.active": {
                      background: "royalblue",
                      color: "white",
                      borderRadius: "8px",
                    },
                  })}
                  to={`/contacts/${value}`}
                >{`${first} ${last}`}</NavLink>
              </li>
            );
          })
        : null}
    </ul>
  );
}
