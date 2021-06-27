
const text = document.querySelectorAll(".thepaths");

for(let i=0;i<text.length;i++){
    console.log(`textnumber ${i} length is ${text[i].getTotalLength()}`);
}

const lastword = document.querySelector("#fourteenth");
const animation = document.querySelector("div.animation");
lastword.addEventListener("animationend",() => {
    animation.style="transition:all 1s ease; opacity:0; pointer-events:none;";
})