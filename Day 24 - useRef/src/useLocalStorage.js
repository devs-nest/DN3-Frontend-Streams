import React from "react";
import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    setLocalStorageValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [localStorageValue, setValue];
}
