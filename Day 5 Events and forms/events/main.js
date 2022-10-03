
document.addEventListener("DOMContentLoaded", function () {

    function handleMouseOver(event) {
        console.log(event);
    }


    // recommeded 
    document.getElementById("start").addEventListener("click", function handleClick() {
        //event object
        // contains information about the event
        document.addEventListener("mouseover", handleMouseOver)
    })
    document.getElementById("stop").addEventListener("click", function handleClick() {
        //event object
        // contains information about the event
        document.removeEventListener("mouseover", handleMouseOver)
    })

    document.addEventListener("keypress", function (event) {
        console.log("keypress");
        console.log(e.key);
        if (e.key == 2) {
            e.preventDefault();
        }
    })

    document.getElementById("username").addEventListener("focus", function (event) {
        console.log("focus event happened")
    })
    document.getElementById("username").addEventListener("blur", function (event) {
        console.log("blur event happened")
    })

    // events are captured

    document.querySelector(".parent").addEventListener("click", function (event) {
        console.log("parent clicked");

    }, true)
    document.querySelector(".child").addEventListener("click", function (event) {
        console.log("child clicked");
        // event.stopPropagation();
    }, true)

    document.getElementById("subchild").addEventListener("click", function (event) {
        console.log("subchild clicked");
    }, true)

})

