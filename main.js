document.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("rodei");
    AFRAME.registerComponent("hello-world", {
        init: function() {
            console.log("Hello, World!");
        },
    });

    document.querySelector("a-scene").setAttribute("hello-world", "");
}