let boxes = document.querySelectorAll(".box");

let colors = ["#eb664b","#f7d423","#4671b3","#8ce6b7","#533d87"]

for (box of boxes) {
    box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}