document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("name").value = sessionStorage.getItem("name") ?? "";
    document.getElementById("save").addEventListener("click", () => {
        const name = document.getElementById("name").value;
        sessionStorage.setItem("name", name);
        console.log((name));
    })
})

// session storage