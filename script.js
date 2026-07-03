const openBtn = document.getElementById("openBtn");
const home = document.getElementById("home");
const cardPage = document.getElementById("cardPage");
const music = document.getElementById("music");

openBtn.onclick = () => {
    home.style.display = "none";
    cardPage.style.display = "block";
    music.play().catch(e => console.log("รอการคลิก"));
    
    // ปรับความถี่เป็น 600ms ตามที่คุณต้องการ
    setInterval(() => {
        const items = ["❤", "🧡", "💛", "💚", "💙", "💜", "🤍", "🎈", "🌻"];
        const randomItem = items[Math.floor(Math.random() * items.length)];
        createEffect(randomItem, "floatUp");
    }, 600);

    typeText();
};

function typeText() {
    // ข้อความใหม่ที่ต้องการ
    const msg = "แฮปปี้เบิดร์เดย์นะคับ🫳🏻🦮 \nขอให้แกมีความสุขมากเย้อ ยิ้มเย้อๆ ขอให้ได้กินของอร่อยเย้อๆ \nนอนอิ่มๆ มีแต่คนน่ารักกับแกก ไม่มีคนมาใจร้ายใส่แกก \nแล้วก็ขอให้แกไม่ดื้อไม่ซนเพราะแกยังเล็ก ei-ei \nอ่านจบแล้วบอกเรานะเรามีของขวัญอันเล็กๆจะห้ายย";
    const textEl = document.getElementById("cardText");
    let i = 0;

    function typing() {
        if (i < msg.length) {
            textEl.innerHTML += msg[i] === "\n" ? "<br>" : msg[i];
            i++;
            setTimeout(typing, 60);
        }
    }
    typing();
}

function createEffect(icon, animName) {
    const el = document.createElement("div");
    el.className = "element";
    el.innerHTML = icon;
    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.bottom = "-50px";
    el.style.fontSize = "30px";
    el.style.zIndex = "-1";
    el.style.animation = animName + " 8s linear forwards";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 8000);
}
