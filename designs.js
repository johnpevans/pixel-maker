
const form = document.querySelector("#sizePicker");
const table = document.querySelector("#pixelCanvas");
const pixelColor = document.querySelector("#colorPicker");
const inputHeight = document.querySelector("#inputHeight");
const inputWidth = document.querySelector("#inputWidth");

// Select size input
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    table.innerHTML = "";
    let height = inputHeight.value;
    let width = inputWidth.value;
    makeGrid(height, width);
});

function makeGrid(h, w) {
    for(let x = 0; x < h; x++){
        let tr = document.createElement("tr");
        table.appendChild(tr);
        
        for (let y = 0; y < w; y++){
            let td = document.createElement("td");
            tr.appendChild(td);
            td.addEventListener("click", () => {
                td.style.backgroundColor = pixelColor.value;
             });
            
        }
    }
};