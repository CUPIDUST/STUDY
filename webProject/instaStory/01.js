let image = [0, 1, 2, 3]
// console.log(image);
let myobj = [{ dp: "Anna3.jpg",story:"Anna20.jpg" }, 
{ dp: "Anna3.jpg",story:"Anna20.jpg" },
 { dp: "Anna3.jpg",story:"Anna20.jpg" },
  { dp: "Anna3.jpg",story:"Anna20.jpg" }]
let clutter = "";
image.forEach((element, idx) => {
    // console.log(element);
    // element.addEventListener("click", () => {
    //     // console.log("HI");
    //     element.src = "Anna20.jpg";

    //     element.src="myobj.story1";
    // })
    clutter += `<div class="photo1 storyBox"><img src="${myobj[idx].dp}" alt="yo"></div>`
    // <div class="photo2 storyBox"><img src="${element.story}" alt="yo"></div>
    // <div class="photo3 storyBox"><img src="${element.story}" alt="yo"></div>
    // <div class="photo4 storyBox"><img src="${element.story}" alt="yo"></div>
});
// console.log(image[1]);
// let a=7;
// console.log(`myobj.story${a}`);
// console.log(clutter);
document.querySelector(".container1").innerHTML = clutter;
// console.log(myobj[0]);
let store=document.querySelector(".storyBox img")
store.forEach((element,idx)=>{
    element.addEventListener("click",()=>{
        element.src="Anna20.jpg";
    })
})