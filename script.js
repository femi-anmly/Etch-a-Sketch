const container = document.querySelector(".container");

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

                squareDiv.addEventListener("mouseover", leaveTrail);
            }

        const breakDiv = document.createElement("div");
        breakDiv.classList.toggle("break")
        container.appendChild(breakDiv);
        }






