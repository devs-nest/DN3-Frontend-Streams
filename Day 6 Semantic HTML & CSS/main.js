const listOfFruits = [
    {
        value: "apple", displayText: "Apple"
    },
    {
        value: "kiwi", displayText: "Kiwi"
    },
    {
        value: "orange", displayText: "Orange"
    }
]

document.addEventListener("DOMContentLoaded", function () {



    const select = document.createElement("select");

    for (let fruit of listOfFruits) {
        const option = document.createElement("option");
        option.value = fruit.value;
        option.textContent = fruit.displayText;
        select.appendChild(option)
    }

    select.addEventListener("change", function (event) {
        console.log(event.target.value);

    })
    document.body.appendChild(select);
})