let canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
let ctx = canvas.getContext("2d")
ctx.lineWidth = 5
var lsize=20;
let prevX = null
let prevY = null

let draw = false

sizerc = document.getElementById('size');
sizerc.addEventListener('input', function (evt) {
    lsize = parseInt(this.value);
});

function colorpicker(pick){
    ctx.fillStyle = pick.toString()
}

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch.png"
    a.click()
})

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", function(e){
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }
    ctx.beginPath();
    ctx.arc(prevX, prevY, lsize, 0, 2 * Math.PI);
    ctx.fill();

    prevX = e.clientX
    prevY = e.clientY
})
