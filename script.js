let sizeChangeButton = document.querySelector(".size-change-button");
let container = document.querySelector("#container");
let size = getSize();
createPixels(size)
function createPixels(){
    container.style.setProperty('--size', size);
    for (let i = 0; i < size * size; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseover", insertColor);
        container.appendChild(pixel);
    }
}

function insertColor(event){
    event.target.style.backgroundColor = "black";
}

function getSize(){
    
    let condition = true;
    while (condition) {
        let sizeinput = prompt("enter size (between 16-200)");
        if (sizeinput >= 16 && sizeinput <=200) {
            
            return sizeinput;
        }
    }
    
}
sizeChangeButton.addEventListener("click", (e) => {
    let pixelArray = document.querySelectorAll(".pixel");
    pixelArray.forEach((element) => {element.remove()});
    size = getSize();
    createPixels(size);
});
