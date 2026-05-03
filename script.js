const bgSound = document.getElementById("bgSound");
const boomSound = document.getElementById("boomSound");
const memeSound = document.getElementById("memeSound");
const enterBtn = document.getElementById("enterBtn");
const startScreen = document.getElementById("startScreen");
const formScreen = document.getElementById("formScreen");

const submitBtn = document.getElementById("submitBtn");

const loadingScreen = document.getElementById("loadingScreen");
const loadingText = document.getElementById("loadingText");

const resultScreen = document.getElementById("resultScreen");
const resultText = document.getElementById("resultText");

/*enterBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  formScreen.classList.remove("hidden");
  bgSound.volume = 1; // low creepy sound
  bgSound.play();
   
});*/
enterBtn.addEventListener("click", async () => {
  startScreen.classList.add("hidden");
  formScreen.classList.remove("hidden");

  try {
    // 🔓 unlock ALL sounds with real user interaction
    await bgSound.play();
    bgSound.pause();

    await boomSound.play();
    boomSound.pause();

    await memeSound.play();
    memeSound.pause();

    // reset all
    bgSound.currentTime = 0;
    boomSound.currentTime = 0;
    memeSound.currentTime = 0;

    // now start ambient
    bgSound.volume = 0.2;
    bgSound.play();

  } catch (err) {
    console.log("Audio unlock failed:", err);
  }
});

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const fear = document.getElementById("fear").value.trim();

  if (name === "" || fear === "") {
    alert("The Oracle requires truth...");
    return;
  }

  formScreen.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  const messages = [
    "Reading your mind...",
    "Accessing hidden thoughts...",
    "Analyzing fear patterns...",
    "Cross-checking reality...",
    "Something is wrong...",
    "This data shouldn't exist..."
  ];

  let i = 0;

  const interval = setInterval(() => {
    loadingText.innerText = messages[i];
    i++;

    if (i >= messages.length) {
      clearInterval(interval);

      setTimeout(() => {
        showGlitch(name, fear);
      }, 1000);
    }
  }, 1200);
});

function showGlitch(name, fear) {
  // glitch flash
  document.body.style.background = "white";

  setTimeout(() => {
    document.body.style.background = "black";
    loadingText.innerText = "Wait... we never asked that.";
  }, 200);

  setTimeout(() => {
    showResult(name, fear);
  }, 2000);
}

function showResult(name, fear) {
  loadingScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let text = `${name}...\n\nYour  fear  of  "${fear}"  is  not  just  a  fear ...\n\n It  has  already  begun.`;

  let i = 0;
  resultText.innerText = "";

  let typing = setInterval(() => {
    resultText.innerText += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(typing);

      // screen shake
      shakeScreen();

      /*setTimeout(() => {
  resultText.innerText += "\n\nSYSTEM FAILURE...\n\nYOU JUST GOT HACKED !!!";

  // start chaos after 1 sec
  setTimeout(() => {
    startMemeChaos();
  }, 1000);

}, 1500);
    }
  }, 35);
}*/
    setTimeout(() => {
  resultText.innerText += "\n\nSYSTEM FAILURE...\n\nYOU JUST GOT HACKED !!!";

  // stop background
  bgSound.pause();

  // 💥 PLAY BOOM SOUND
  boomSound.currentTime = 0;
  boomSound.volume = 1;
  boomSound.play();

  // 🔥 shake hard here
  startScreenShake(50, 4000);
  boomSound.onended = () => {
    memeSound.currentTime = 0;
    memeSound.volume = 1;
    memeSound.play();
  };

  setTimeout(() => {
    startMemeChaos();
  }, 800);

}, 1500);
    }
  },35);
}

// screen shake effect
function shakeScreen() {
  let count = 0;

  let shake = setInterval(() => {
    document.body.style.transform =
      `translate(${Math.random()*10 - 5}px, ${Math.random()*10 - 5}px)`;

    count++;

    if (count > 20) {
      clearInterval(shake);
      document.body.style.transform = "translate(0,0)";
    }
  }, 30);
}
/*function startMemeChaos() {
  const memes = [
    "Aree bhai kya kar raha hai 😂",
    "Mummy aa gayi bhaag 🏃‍♂️",
    "Padhle bhai 📚",
    "System hang ho gaya 💀",
    "Bhai tu rehne de 🤡",
    "Yeh kya dekh liya maine 😭",
    "1 like = 1 respect 🙏",
    "Exam aa raha hai 😨"
  ];

  setInterval(() => {
    const meme = document.createElement("div");
    meme.classList.add("meme");

    meme.innerText = memes[Math.floor(Math.random() * memes.length)];

    // random position
    meme.style.position = "fixed";
    meme.style.top = Math.random() * window.innerHeight + "px";
    meme.style.left = Math.random() * window.innerWidth + "px";

    // random rotation (chaotic feel)
    meme.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

    document.body.appendChild(meme);
  }, 200); // speed (lower = more insane)
}*/
function startMemeChaos() {
  const memes = [
    "memes/meme1.jpeg",
    "memes/meme2.jpg",
    "memes/meme3.jpg",
    "memes/meme4.jpg",
    "memes/meme5.jpg",
    "memes/meme6.jpeg",
    "memes/meme8.jpeg",
    "memes/meme9.jpeg",
    "memes/meme10.jpg"
  ];

  let speed = 120;

  const chaos = setInterval(() => {
    const img = document.createElement("img");

    img.src = memes[Math.floor(Math.random() * memes.length)];
    img.classList.add("meme-img");

    // RANDOM POSITION (overflow allowed)
    img.style.top = (Math.random() * window.innerHeight - 100) + "px";
    img.style.left = (Math.random() * window.innerWidth - 100) + "px";

    // RANDOM SIZE (BIG RANGE)
    let size = Math.random() * 400 + 120;
    img.style.width = size + "px";

    // RANDOM ROTATION
    let rotation = Math.random() * 360;
    img.style.transform = `rotate(${rotation}deg)`;

    // RANDOM LAYER (OVERLAP!)
    img.style.zIndex = Math.floor(Math.random() * 1000);

    document.body.appendChild(img);

    // 🔥 increase chaos over time
    if (speed > 30) {
      speed -= 2;
      clearInterval(chaos);
      startFasterChaos(speed);
    }

  }, speed);
}

// recursive speed boost
/*function startFasterChaos(speed) {
  const memes = [
    "memes/meme1.jpg",
    "memes/meme2.jpg",
    "memes/meme3.jpg",
    "memes/meme4.jpg",
    "memes/meme5.jpg",
    "memes/meme6.jpeg",
    "memes/meme8.jpeg",
    "meme/meme9.jpeg",
    "memes/meme10.jpg"
  ];

  setInterval(() => {
    const img = document.createElement("img");

    img.src = memes[Math.floor(Math.random() * memes.length)];
    img.classList.add("meme-img");

    img.style.top = (Math.random() * window.innerHeight - 100) + "px";
    img.style.left = (Math.random() * window.innerWidth - 100) + "px";

    let size = Math.random() * 350 + 150;
    img.style.width = size + "px";

    img.style.transform = `rotate(${Math.random() * 360}deg)`;
    img.style.zIndex = Math.floor(Math.random() * 2000);

    document.body.appendChild(img);

    // 💀 screen shake
    document.body.style.transform =
      `translate(${Math.random()*20-10}px, ${Math.random()*20-10}px)`;

  }, speed);
}*/
// recursive speed boost
function startFasterChaos(speed) {
  const memes = [
    "memes/meme1.jpeg",
    "memes/meme2.jpg",
    "memes/meme3.jpg",
    "memes/meme4.jpg",
    "memes/meme5.jpg",
    "memes/meme6.jpeg",
    "memes/meme9.jpeg",
    "memes/meme10.jpg"
  ];

  setInterval(() => {
    const img = document.createElement("img");

    img.src = memes[Math.floor(Math.random() * memes.length)];
    img.classList.add("meme-img");

    img.style.top = (Math.random() * window.innerHeight - 100) + "px";
    img.style.left = (Math.random() * window.innerWidth - 100) + "px";

    let size = Math.random() * 350 + 150;
    img.style.width = size + "px";

    img.style.transform = `rotate(${Math.random() * 360}deg)`;
    img.style.zIndex = Math.floor(Math.random() * 2000);

    document.body.appendChild(img);

    // 💀 screen shake
    document.body.style.transform =
      `translate(${Math.random()*20-10}px, ${Math.random()*20-10}px)`;

  }, speed);
}
function finalExplosion() {
  const msg = document.createElement("div");

  msg.innerText = "DESTINY COMPLETE 😂";
  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.color = "white";
  msg.style.fontSize = "3rem";
  msg.style.zIndex = "1000";
  msg.style.textShadow = "0 0 20px red";

  document.body.appendChild(msg);
}
function startScreenShake() {
  let shaking = true;

  function shake() {
    if (!shaking) return;

    const x = Math.random() * 20 - 10;
    const y = Math.random() * 20 - 10;

    document.body.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(shake);
  }

  shake();

  // optional stop after some time
  setTimeout(() => {
    shaking = false;
    document.body.style.transform = "translate(0,0)";
  }, 5000); // shake duration
}
const warningText = document.getElementById("warningText");

// set data-text for glitch layers
warningText.setAttribute("data-text", warningText.innerText);

// random glitch text change
setInterval(() => {
  const messages = [
    "⚠ WARNING: This system requires absolute honesty.",
    "⚠ WARNING: Lying will be detected.",
    "⚠ WARNING: You cannot hide from this.",
    "⚠ WARNING: Something is watching...",
    "⚠ WARNING: This was not meant for you."
  ];

  let random = messages[Math.floor(Math.random() * messages.length)];

  warningText.innerText = random;
  warningText.setAttribute("data-text", random);

}, 2500);