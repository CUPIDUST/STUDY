let container1 = document.querySelector(".container1");
let cursor = document.querySelector(".cursor");
container1.addEventListener("mousemove", (dex) => {
    // console.log(dex.x );
    cursor.style.left = dex.x + "px";
    cursor.style.top  = dex.y + "px";
});