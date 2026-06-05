let main = document.getElementById("main");
let arr = ["https://i.pinimg.com/736x/9c/22/88/9c2288407d7048fbb73e4a736dc4306d.jpg",
"https://i.pinimg.com/1200x/97/24/33/972433f775c86ff59a74bedc8d2b2d10.jpg",
"https://i.pinimg.com/1200x/2b/12/2b/2b122b3a66e352bfa972222091e1f9dd.jpg",
"https://i.pinimg.com/1200x/ff/25/8d/ff258d31fe5226d084c41dce77650503.jpg",
"https://i.pinimg.com/736x/2d/a3/e2/2da3e25b594272fadb7076899bcae1d6.jpg",
"https://i.pinimg.com/736x/f7/c2/d0/f7c2d0c26e1011ba29e14a09a4c5b18f.jpg",
"https://i.pinimg.com/736x/ef/2a/da/ef2ada4e54421188917785af29aedf50.jpg"];
let s = "";
for(let i = 1 ; i <= 55 ; i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="cards"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;



