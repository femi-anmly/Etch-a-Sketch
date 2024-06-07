const container = document.querySelector(".container");
const container0 = document.querySelector("#header");

const btn = document.createElement("button");
btn.textContent = "Create Grid";
btn.classList.toggle("button");
container0.appendChild(btn);

const breakDiv1 = document.createElement("div");
breakDiv1.classList.toggle("break");
container0.appendChild(breakDiv1);

for (let j = 0; j < 16; j++)
    {
        for (let i = 0; i < 16; i++)
            {
                const squareDiv = document.createElement("div");
                squareDiv.classList.toggle("square");
                container.appendChild(squareDiv);

                function leaveTrail() {
                    
                    squareDiv.style.backgroundColor = "grey";
                }
                
                function removeGrid() {
                    squareDiv.remove();
                }

                squareDiv.addEventListener("mouseover", leaveTrail);
                btn.addEventListener("click", removeGrid);
            }

        const breakDiv = document.createElement("div");
        breakDiv.classList.toggle("break")
        container.appendChild(breakDiv);
        }

function newGrid(height, width) {
    height = prompt("Please enter the side length of the grid");
            while (height > 100 || height === "")
                {
                    height = prompt("Please enter the side length of the grid");
                }
    width = height;
    
    const calcSideLength = (960/height) - 2;
    const sideLength = "" + calcSideLength + "px";
    console.log(sideLength);



    for (let j = 0; j < height; j++)
    {
        for (let i = 0; i < width; i++)
            {
                const squareDiv = document.createElement("div");
                squareDiv.classList.toggle("square");
                squareDiv.style.height = sideLength;
                squareDiv.style.width = sideLength;
                container.appendChild(squareDiv);

                function leaveTrail() {
                    squareDiv.style.backgroundColor = "grey";
                }
                function removeGrid() {
                    squareDiv.remove();
                }
                squareDiv.addEventListener("mouseover", leaveTrail);
                btn.addEventListener("click", removeGrid);
            }

        const breakDiv = document.createElement("div");
        breakDiv.classList.toggle("break")
        container.appendChild(breakDiv);
        }

}

btn.addEventListener("click", newGrid);





