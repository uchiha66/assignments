var buttong = document.getElementById("gb")
var buttonb = document.getElementById("bb")
var buttonc = document.getElementById("cb")


var count = 0
function b1func (){
    console.log(count++)
}


buttong.addEventListener("click", b1func)
buttonb.addEventListener("click", b1func)
buttonc.addEventListener("click", b1func)