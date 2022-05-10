let img = document.querySelectorAll('img')[0];
let a =   Math.floor(Math.random()*6)+1
let b =   Math.floor(Math.random()*6)+1
console.log(a)

let source = "images/dice"+a+".png"
img.setAttribute("src",source)
let source1 = "images/dice"+b+".png"
document.querySelectorAll('img')[1].setAttribute('src',source1)

// let h1 = document.getElementsByTagName("h1")
if(a>b){
    
    document.querySelector('h1').innerHTML="Player 1 Wins!!"
}
else if(b>a){
    document.querySelector('h1').innerHTML="Player 2 Wins!!"
}else{
    document.querySelector('h1').innerHTML="Draw!!"
}
