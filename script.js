document.getElementById("scrollButton").addEventListener("click", function() {
    var targetElement = document.getElementById("targetSection");
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
});