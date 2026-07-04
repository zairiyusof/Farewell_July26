const music = document.getElementById("bgMusic");

let started = false;

async function startMusic() {
    if (started) return;
    started = true;

    try {
        await music.play();
        console.log("Music started");
    } catch (err) {
        console.error(err);
        started = false;
    }
}

document.addEventListener("pointerdown", startMusic, { passive: true });
