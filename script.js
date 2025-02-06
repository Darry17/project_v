
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showMessageBtn");
    const messageSection = document.getElementById("message");
    const messageText = document.getElementById("valentineMessage");
    const closeButton = document.getElementById("closeMessageBtn");

    button.addEventListener("click", function () {
        // Your personalized Valentine's Day message
        const message = "Dear Achie, this is our FIRST Valentine's Day Han!, I'M SO EXCITED! WAIT MO KO DYAN OKI? PAPUNTA NA AKO. I can't wait to make more memories with you. I know you preferred hand-written letters, nandon yung message ko for you hehe -Dawwy💖";

        messageText.textContent = message;
        messageSection.classList.add("show"); // Show the message with fade-in effect

        // Create floating hearts
        for (let i = 0; i < 20; i++) {
            createFloatingHeart();
        }
    });

    document.querySelectorAll('.valentines').forEach(item => {
        item.addEventListener('click', function () {
            document.getElementById('message').classList.toggle('show');
        });
    });
    
    document.getElementById('closeMessageBtn').addEventListener('click', function () {
        document.getElementById('message').classList.remove('show');
    });
    

    // Close button functionality
    closeButton.addEventListener("click", function () {
        messageSection.classList.remove("show"); // Hide message with fade-out effect
    });

    function createFloatingHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        document.body.appendChild(heart);

        // Random position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight - 50;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});

// Handle message visibility
const showMessageBtn = document.getElementById('showMessageBtn');
const closeMessageBtn = document.getElementById('closeMessageBtn');
const messageSection = document.getElementById('message');

// Show the message when the button is clicked
showMessageBtn.addEventListener('click', () => {
    messageSection.classList.remove('hidden');
});

// Close the message when the close button is clicked
closeMessageBtn.addEventListener('click', () => {
    messageSection.classList.add('hidden');
});


document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            const overlay = this.querySelector(".overlay");

            // Toggle overlay visibility with transition
            overlay.classList.toggle("show");
        });
    });
});

