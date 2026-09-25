/* =========================================================
   BIRTHDAY SURPRISE WEBSITE
========================================================= */


/* =========================================================
   VARIABLES
========================================================= */

let currentScreen = 1;

const totalScreens = 8;

const music =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");

const progressBar =
    document.getElementById("progressBar");


/* =========================================================
   CREATE STARS
========================================================= */

const stars =
    document.getElementById("stars");

for (let i = 0; i < 130; i++) {

    const star =
        document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.setProperty(
        "--duration",
        (2 + Math.random() * 5) + "s"
    );

    star.style.animationDelay =
        Math.random() * 5 + "s";

    const size =
        Math.random() * 3 + 1;

    star.style.width =
        size + "px";

    star.style.height =
        size + "px";

    stars.appendChild(star);
}


/* =========================================================
   SCREEN NAVIGATION
========================================================= */

function nextScreen() {

    if (currentScreen >= totalScreens) {
        return;
    }

    const current =
        document.getElementById(
            `screen${currentScreen}`
        );

    const next =
        document.getElementById(
            `screen${currentScreen + 1}`
        );

    current.classList.remove("active");

    setTimeout(() => {

        next.classList.add("active");

    }, 100);

    currentScreen++;

    updateProgress();

    playMusic();

    if (currentScreen === 5) {
        startBirthdayTyping();
    }
}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    const percentage =
        ((currentScreen - 1) /
        (totalScreens - 1)) * 100;

    progressBar.style.width =
        percentage + "%";
}


/* =========================================================
   MUSIC
========================================================= */

function playMusic() {

    music.play()
        .then(() => {

            musicButton.innerHTML = "♫";

        })
        .catch(() => {

            console.log(
                "Music waiting for user interaction."
            );

        });
}


musicButton.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play();

            musicButton.innerHTML =
                "♫";

        } else {

            music.pause();

            musicButton.innerHTML =
                "♪";
        }
    }
);


/* =========================================================
   NO BUTTON
========================================================= */

const noButton =
    document.getElementById("noButton");

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);

noButton.addEventListener(
    "touchstart",
    moveNoButton
);

function moveNoButton() {

    const maxX =
        window.innerWidth < 600
            ? 100
            : 220;

    const maxY =
        window.innerWidth < 600
            ? 120
            : 150;

    const x =
        (Math.random() * maxX * 2) -
        maxX;

    const y =
        (Math.random() * maxY * 2) -
        maxY;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;
}


/* =========================================================
   BALLOONS
========================================================= */

function launchBalloons() {

    const container =
        document.getElementById(
            "balloonContainer"
        );

    const balloonColors = [
        "#ff3b7d",
        "#ff75a8",
        "#9d68ff",
        "#6d7cff",
        "#ffb3d1",
        "#7c4dff",
        "#ff4f91"
    ];

    for (let i = 0; i < 28; i++) {

        const balloon =
            document.createElement("div");

        balloon.className =
            "balloon";

        balloon.style.left =
            Math.random() * 100 + "%";

        balloon.style.background =
            balloonColors[
                Math.floor(
                    Math.random() *
                    balloonColors.length
                )
            ];

        balloon.style.setProperty(
            "--speed",
            (5 + Math.random() * 7) + "s"
        );

        balloon.style.animationDelay =
            Math.random() * 3 + "s";

        balloon.style.transform =
            `scale(${0.7 + Math.random() * 0.7})`;

        container.appendChild(balloon);

        setTimeout(() => {

            balloon.remove();

        }, 12000);
    }

    setTimeout(() => {

        nextScreen();

    }, 4000);
}


/* =========================================================
   BIRTHDAY TYPING
========================================================= */

function startBirthdayTyping() {

    const element =
        document.getElementById(
            "birthdayTyping"
        );

    const text =
        "Today is your day. May it be filled with laughter, beautiful moments, unforgettable memories and everything that makes you smile.";

    element.innerHTML = "";

    let index = 0;

    const typing =
        setInterval(() => {

            element.textContent +=
                text[index];

            index++;

            if (index >= text.length) {

                clearInterval(typing);

            }

        }, 28);
}


/* =========================================================
   CONFETTI
========================================================= */

function finalSurprise() {

    nextScreen();

    createConfetti();

    createHearts();

    createSparkles();
}


function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );

    container.innerHTML = "";

    const colors = [
        "#ff3b7d",
        "#ff8ab5",
        "#9d68ff",
        "#ffffff",
        "#ffd166"
    ];

    for (let i = 0; i < 180; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.setProperty(
            "--fall",
            (3 + Math.random() * 5) + "s"
        );

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);
    }
}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom =
            "-50px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "15";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "transform 6s ease, opacity 6s ease";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px)
                 translateX(${(Math.random() - 0.5) * 200}px)
                 rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {

            heart.remove();

        }, 7000);
    }
}


/* =========================================================
   SPARKLES
========================================================= */

function createSparkles() {

    for (let i = 0; i < 50; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.innerHTML = "✦";

        sparkle.style.position =
            "fixed";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.color =
            "white";

        sparkle.style.fontSize =
            (8 + Math.random() * 18) + "px";

        sparkle.style.opacity =
            "0";

        sparkle.style.zIndex =
            "14";

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.transition =
            "opacity 1s ease, transform 2s ease";

        document.body.appendChild(
            sparkle
        );

        setTimeout(() => {

            sparkle.style.opacity =
                "0.9";

            sparkle.style.transform =
                "scale(1.5)";

        }, Math.random() * 2000);

        setTimeout(() => {

            sparkle.style.opacity =
                "0";

        }, 3500);

        setTimeout(() => {

            sparkle.remove();

        }, 4500);
    }
}


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
    document.getElementById(
        "cursorGlow"
    );

document.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";
    }
);


/* =========================================================
   TOUCH RIPPLE
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        const ripple =
            document.createElement("div");

        ripple.style.position =
            "fixed";

        ripple.style.left =
            event.clientX + "px";

        ripple.style.top =
            event.clientY + "px";

        ripple.style.width = "10px";

        ripple.style.height = "10px";

        ripple.style.borderRadius =
            "50%";

        ripple.style.border =
            "1px solid rgba(255,100,170,0.7)";

        ripple.style.transform =
            "translate(-50%, -50%)";

        ripple.style.pointerEvents =
            "none";

        ripple.style.zIndex =
            "10000";

        ripple.style.transition =
            "transform 0.7s ease, opacity 0.7s ease";

        document.body.appendChild(
            ripple
        );

        requestAnimationFrame(() => {

            ripple.style.transform =
                "translate(-50%, -50%) scale(12)";

            ripple.style.opacity =
                "0";
        });

        setTimeout(() => {

            ripple.remove();

        }, 800);
    }
);


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === "ArrowRight"
        ) {

            if (currentScreen < 8) {
                nextScreen();
            }
        }

        if (event.key === " ") {

            event.preventDefault();

            if (currentScreen < 8) {
                nextScreen();
            }
        }
    }
);


/* =========================================================
   RESTART
========================================================= */

function restartExperience() {

    location.reload();

}


/* =========================================================
   INITIALIZATION
========================================================= */

updateProgress();