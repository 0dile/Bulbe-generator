let score = 0;
        function createBubble() {
            const bubble = document.createElement("div");
            const size = Math.random() * 200 + 80;
            const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            const position = Math.random() * window.innerWidth;

            bubble.classList.add("bubble");
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.backgroundColor = color;
            bubble.style.left = `${position}px`;
            
            bubble.style.bottom = "0px";
            document.body.appendChild(bubble);
            
            bubble.addEventListener("click", () => {
                score += 5;
                document.querySelector("#score span").textContent = score;
                bubble.remove();
            });
            
            setTimeout(() => bubble.remove(), 5000);
        }

        setInterval(createBubble, 500);                    