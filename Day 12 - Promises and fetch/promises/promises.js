let moneyLended = 10_000;
let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(8000); // kept my promise
        // reject(new Error("I lied, you're not getting your money back!"))
    }, 3000) // represent two days

});

// promise
//     .then((money) => {

//         console.log("Yay! , I got my money back");

//         return money
//     }, error => {
//         console.error("😭", error.message)
//     })

promise
    .then((money) => {

        console.log("Yay! , I got my money back");

        return money
    })
    .then(moneyRecevied).
    then(extraMoney => {
        if (extraMoney) {
            console.log("Wow my friend is generous❤️, now I can buy something with the extra amount", extraMoney);
        }
        console.log("Deposit the lended amount back to the bank");

    }).catch(error => {
        console.error("😭", error.message)
    }).finally(() => {
        console.log("it will be called irrespective of the outcome")
    })



// fullfilled state - successful outcome
// rejected state - error
// pending state - neither fullfilled nor rejected
// settled state - it represents - fullfilled state / rejected state

function moneyRecevied(amountReceived) {
    return new Promise((resolve, reject) => {
        if (amountReceived > moneyLended) {
            resolve(amountReceived - moneyLended);
        } else if (amountReceived < moneyLended) {
            reject(new Error("Oh wait, I have received the entire amount"));
        } else {
            resolve(0);
        }
    })
}

// convertAmount(from, to, amount = 5) => response
// response => structured data 
// {
//     info:{
//         rate: 81
//     },
//     result: 5*81
// }

// // JSON 
// JavaScript Object Notation

// // XML
// // text

// call api => requesting for some info => promise
// response => json 
// or 
// well get some error