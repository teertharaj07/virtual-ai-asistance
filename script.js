let box = document.querySelector(".box");
let btn = document.querySelector("button");
let img = document.querySelector("img");

const speakFunc = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    // for speed
    // speakInput.rate = 1;
    // speakInput.pitch = 1;
    // speakInput.volume=1;
    // for girl langauge
    // speakInput.lang = 'en-GB';
    // for indian english
    speakInput.lang = 'en-IN';
    // speakInput.lang = 'hi-IN';
    // speakInput.lang = 'hi-GB';

    window.speechSynthesis.speak(speakInput);
}

img.addEventListener("click",()=>{

    greetingFunc()
})
const greetingFunc = () => {
    let date = new Date();
    let hours = date.getHours();
    if (hours >= 0 && hours < 12) {
        speakFunc("Good morning sir,How Can i help you !")
    }
    else if (hours >= 12 && hours < 16) {
        speakFunc("Good afternoon sir,How Can i help you !")

    }
    else {
        speakFunc("Good evening sir,How Can i help you !")

    }
}

const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = (e) => {
            console.log(e);
            console.log(e.results[0][0].transcript);
            let spokenText = e.results[0][0].transcript;
            handleCommands(spokenText.toLowerCase());
            box.classList.remove("btn-box");
            btn.innerHTML = '<i class="fa-solid fa-microphone-lines-slash"></i>'
        }
        recognition.start();
    }
    else {
        alert("Your browser does not support voice input")
    }

}

btn.onclick = () => {
    box.classList.add("btn-box");
    btn.innerHTML = '<i class="fa-solid fa-microphone-lines"></i>'
    startVoiceInput();
}
const handleCommands = (command) => {
    console.log(command);
    if (command.includes("hey") || command.includes("hello") || command.includes("hi")) {
        speakFunc("Hello sir, How can I Help You !")
    }
    else if (command.includes("who are you") || command.includes("hu r u") ){
        speakFunc("I Am Virtual Asistance, Devloped By Teerthraj Turkar !")
    }
    else if (command.includes("what is your name") || command.includes("hu r u") ){
        speakFunc("my name Virtual Asistance, Devloped By Teerthraj Turkar !")
    }
    else if (command.includes("who is teerthraj turkar")|| command.includes("tirthraj")) {
        speakFunc("Teerthraj Turkar is the software devloper !")
    }
    else if (command.includes("open just for code youtubr channel") || command.includes("just for code") || command.includes("just for food")) {
        speakFunc("opening...just for code Youtube channel")
        window.open("https://www.youtube.com/@Justforcode")
    }

    else if (command.includes("open google") || command.includes("google")) {
        speakFunc("opening...google")
        window.open("https://www.google.com")
    }
    else if (command.includes("open youtube") || command.includes("youtube")) {
        speakFunc("opening...youtube")
        window.open("https://www.youtube.com")
    }
    else if (command.includes("open facebook") || command.includes("facebook")) {
        speakFunc("opening...facebook")
        window.open("https://www.facebook.com")
    }
    else if (command.includes("tell me, time") || command.includes("time")) {
        let time= new Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'})
        speakFunc(time);
       
    }
    else if (command.includes("tell me, date") || command.includes("date")) {
        let time= new Date()
        speakFunc(time);
       
    }

    else if (command.includes("open calculater") || command.includes("cal")) {
        speakFunc("opening...calculator")
        window.open("calculator://")
    }


    else{
        speakFunc(`this is,what i found on internet regarding ${command}`);
        window.open(`https://www.google.com/search?q=${command}`)
    }




}

