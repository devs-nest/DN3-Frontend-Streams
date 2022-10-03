document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#currency-converter").addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("async function called first")

        const { target: { from, to, amount } } = event;

        let headers = new Headers();
        headers.append("apikey", ""); // add your own api key here

        const requestOptions = {
            method: "GET",
            headers,
        }


        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("reponse is now available");
                // {
                //     "success": true,
                //         "query": {

                //         "from": "EUR",
                //             "to": "INR",
                //                 "amount": 5
                //     },
                //     "info": {
                //         "timestamp": 1664553904,
                //             "rate": 79.58669
                //     },
                //     "date": "2022-09-30",
                //         "result": 397.93345
                // }

                let { info, date, query: { to }, result } = data;
                document.querySelector(".result").textContent = `As per the exchange rate :${info.rate.toFixed(2)} for ${date} => converted value in ${to} is ${result.toFixed(2)} `;
            })
            .catch(error => console.log(error));

        // try {
        //     console.log("calling fetch awaiting response, execution pased");
        //     let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
        //     console.log("response available, execution resumed.");

        //     const data = await response.json();
        //     console.log(data);
        //     let { info, date, query: { to: convertedTo }, result } = data;
        //     document.querySelector(".result").textContent = `As per the exchange rate :${info.rate.toFixed(2)} for ${date} => converted value in ${convertedTo} is ${result.toFixed(2)} `;
        // }
        // catch (error) {
        //     console.log(error);
        // } finally {
        //     console.log("finally block")
        // }


        console.log("end of function");
    })

    document.querySelector("#currency-converter").addEventListener("submit", (event) => {
        console.log("a regular synchronous function");
    })

})