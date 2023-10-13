const chatInput = document.querySelector('.chat-msg-input');
const chatButton = document.querySelector('.chat-text-button');
const chatArea = document.querySelector('.msgs-area');
const add_msg_sound = new Audio('/audio/chat-sound.mp3');
const click_btn_sound = new Audio('/audio/click_btn_sound.mp3');

const createMsg = () => {
    let msg = document.createElement("div")
    let p = document.createElement("p")
    p.textContent = chatInput.value
    msg.classList.add("msg")
    chatArea.append(msg)
    msg.append(p)
}

const addMsg = () => {
    if (chatInput.value !== '') {
        add_msg_sound.play();
        createMsg()
        chatInput.value = '';
    } else {
        click_btn_sound.play();
    }
}

const enterKeyCheck = e => {
    if (e.key === 'Enter') {
        addMsg()
    }
}


chatButton.addEventListener("click", addMsg);
chatInput.addEventListener('keyup', enterKeyCheck);