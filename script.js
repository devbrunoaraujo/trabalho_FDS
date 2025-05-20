document.querySelector("#btn-action").addEventListener("click", function() {
    let div = document.querySelector("#msg-display");
    if (div.style.display === "none") {
        div.style.display = "block"; 
    } else {
        div.style.display = "none";
    }
});
