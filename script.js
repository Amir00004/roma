document.addEventListener("DOMContentLoaded", function() {
    let currentScene = 0;
    let dialogueIndex = 0;

    const scenes = [
        {
            characters: ["character1", "character2"],
            background: "images/aaaaa.png",
            music: "music/Naruaaaato-AfternoonofKonoha.mp3",
            dialogues: [
                { speaker: "character1", text: "HUH?" },
                { speaker: "character1", text: "Where am I?" },
                { speaker: "character1", text: "Is this the end?" },
                { speaker: "character1", text: "Last thing I remember is ...." },

                
            ]
        },
        {
            characters: ["character1", "character2"],
            background: "images/2024-05-25.jpg",
            music: "music/Naruto-AfternoonofKonoha.mp3",
            dialogues: [
                { speaker: "character1", text: "*ring ring*" },
                { speaker: "character1", text: "Zedsuu: Hello?" },
                { speaker: "character2", text: "SOMERANDOM PERSON: Hey, I need a website, can you make one?" },
                { speaker: "character1", text: "Zedsuu: Sure thing, I'll do it for you!" },
                { speaker: "character1", text: "Zedsuu: Send me the details and we'll go from there." },
                { speaker: "character2", text: "SOMERANDOM PERSON: Nice, How much would it cost?" },
                { speaker: "character1", text: "Zedsuu: 2 burgers ." },
                { speaker: "character2", text: "..." },
            ]
        },
        {
            characters: ["character1", "character3"],
            background: "images/2024-05-25.jpg",
            music: "music/Itachi Uchiha - Orignal Soundtrack (extended).mp3",
            dialogues: [
                { speaker: "character1", text: "Zedsuu: Something feels wrong." },
                { speaker: "character3", text: "Sid: MWAHAHAHAHA" },
                { speaker: "character1", text: "Zedsuu: Sid ? What are you doing here?" },
                { speaker: "character3", text: "Sid: TO END YOU" },
                { speaker: "character3", text: "Sid: *throws a cookie at me*" },
                { speaker: "character1", text: "Zedsuu: ..." },
                { speaker: "character3", text: "Sid: ..." },
            ]
        },
        {
            characters: ["character1", "character3"],
            background: "images/2024-05-25.jpg",
            music: "music/NarutoShippudenOSTI-ManofTheWorld.mp3",
            dialogues: [
                { speaker: "character1", text: "Zedsuu: HAHA you missed!" },
                { speaker: "character3", text: "Sid: ..." },
                { speaker: "character1", text: "Zedsuu: wait but why did the music suddenly change???" },
                { speaker: "character3", text: "Sid: IDK" },
            ]
        },
        {
            characters: ["character1", "character4"],
            background: "images/2024-05-25.jpg",
            music: "music/NarutoShippudenOSTI-ManofTheWorld.mp3",
            dialogues: [
                { speaker: "character1", text: "Zedsuu: WAIT" },
                { speaker: "character4", text: "Cat: meow" },
                { speaker: "character1", text: "Zedsuu: P I mean CAAAAT" },
                { speaker: "character4", text: "Cat: I'm dying, I cant neko neko nii anymore" },
                { speaker: "character4", text: "Cat: Avenge me, UGH" },
                { speaker: "character1", text: "Zedsuu: ..." },
                { speaker: "character1", text: "Zedsuu: OMAE WA MOU SHINDEIRU" },
            ]
        },
        {
            characters: ["character1", "character3"],
            background: "images/two-dragons-are-fighting-sky-dragons-are-breathing-fire-each-other-sky-is-orange-ground-is-covered-lava_14117-488485.avif",
            music: "music/Naruto Shippuden OST 1 - Track 01 - Shippuuden.mp3",
            dialogues: [
                { speaker: "character3", text: "Sid: WAIT where are we, how did we get here???" },
                { speaker: "character1", text: "Zedsuu: I'm gonna shut you for life" },
                { speaker: "character3", text: "Sid: ..." },
                { speaker: "character3", text: "Sid: Make me" },
                { speaker: "character1", text: "Zedsuu: Sounds a bit gay ngl" },
                { speaker: "character1", text: "Zedsuu: Let's do this." },
                { speaker: "character3", text: "Sid: *holds a kunai shaped like a cookie*" },
            ]
        },
        {
            characters: ["character1", "character3"],
            background: "images/two-dragons-are-fighting-sky-dragons-are-breathing-fire-each-other-sky-is-orange-ground-is-covered-lava_14117-488485.avif",
            music: "music/Sword Fight Sound Effect.mp3",
            dialogues: [
                { speaker: "character1", text: "Zedsuu: ..." },
                { speaker: "character3", text: "Sid: ..." },
                { speaker: "character1", text: "Zedsuu: ..." },
                { speaker: "character3", text: "Sid: ..." },
                { speaker: "character1", text: "Zedsuu: ..." },
                { speaker: "character3", text: "Sid: ..." },
            ]
        },
        {
            characters: ["character1", "character4"],
            background: "images/two-dragons-are-fighting-sky-dragons-are-breathing-fire-each-other-sky-is-orange-ground-is-covered-lava_14117-488485.avif",
            music: "music/Naruto OST 1 - Sadness and Sorrow [HQ].mp3",
            dialogues: [
                { speaker: "character1", text: "Zedsuu: *heavily breathing*" },
                { speaker: "character1", text: "Zedsuu: *Looks at Sid's dead body*" },
                { speaker: "character1", text: "Zedsuu: *Looks at the cat again*" },
                { speaker: "character4", text: "Cat: ..." },
                { speaker: "character1", text: "Zedsuu: I'm sorry I dragged you into this mess" },
                { speaker: "character4", text: "Cat: ..." },
                { speaker: "character1", text: "Zedsuu: You may rest in peace now" },
            ]
        },
        {
            characters: ["character1", "character4"],
            background: "images/a.png",
            music: "music/background_music2.mp3",
            dialogues: [
                { speaker: "character1", text: "Zedsuu: A minute of silence for the cat that Sid killed" },
            ]
        },
        {
            characters: ["character1", "character2"],
            background: "images/2024-05-25.jpg",
            music: "music/PARASYTE  next to you anime version.mp3",
            dialogues: [
                { speaker: "character1", text: "..." },
                { speaker: "character1", text: "Wait ... wha what happened?" },
                { speaker: "character2", text: "SOMERANDOM PERSON: HELLO CAN YOU HEAR ME?" },
                { speaker: "character1", text: "Zedsuu: AH yes sir I can hear you" },
                { speaker: "character2", text: "SOMERANDOM PERSON: Great, then I'll send you everything" },
                { speaker: "character2", text: "SOMERANDOM PERSON: Looking forward to working with you" },
                { speaker: "character1", text: "Sure *hangs up*" },
                { speaker: "character1", text: "499 Client closed I guess" },
            ]
        },
    ];

    const dialogueBox = document.getElementById("dialogue-box");
    const dialogueText = document.getElementById("dialogue-text");
    const gameContainer = document.getElementById("game-container");
    const music = document.getElementById("background-music");
    const typingSound = new Audio('path_to_typing_sound.mp3');

    // Set initial volumes
    typingSound.volume = 0.3; // Set typing sound volume to 30%
    music.volume = 0.5; // Set background music volume to 50%

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            dialogueText.innerHTML = text.substring(0, i + 1);
            typingSound.play();
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 50);
        } else if (typeof fnCallback === 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function showDialogue(sceneIndex, dialogueIndex) {
        console.log(`Showing dialogue: sceneIndex = ${sceneIndex}, dialogueIndex = ${dialogueIndex}`);
        if (sceneIndex < scenes.length && dialogueIndex < scenes[sceneIndex].dialogues.length) {
            dialogueBox.style.display = "block";
            const currentDialogue = scenes[sceneIndex].dialogues[dialogueIndex];
            console.log(`Current speaker: ${currentDialogue.speaker}`);
            scenes[sceneIndex].characters.forEach(character => {
                document.getElementById(character).style.display = "none";
            });
            document.getElementById(currentDialogue.speaker).style.display = "block";
            typeWriter(currentDialogue.text, 0, function() {
                // callback after typing complete
            });
        } else {
            dialogueBox.style.display = "none";
        }
    }

    function nextDialogue() {
        dialogueIndex++;
        console.log(`Next dialogue: currentScene = ${currentScene}, dialogueIndex = ${dialogueIndex}`);
        if (dialogueIndex >= scenes[currentScene].dialogues.length) {
            dialogueIndex = 0;
            currentScene++;
            if (currentScene >= scenes.length) {
                currentScene = 0; // Reset to the first scene or end the story
                hideAllCharacters();
            }
            updateScene(currentScene);
        } else {
            showDialogue(currentScene, dialogueIndex);
        }
    }

    function updateScene(sceneIndex) {
        console.log(`Updating scene: sceneIndex = ${sceneIndex}`);
        if (sceneIndex < scenes.length) {
            gameContainer.style.backgroundImage = `url(${scenes[sceneIndex].background})`;
            hideAllCharacters();
            music.src = scenes[sceneIndex].music;
            music.play().catch(error => {
                console.log("Error playing music:", error);
                document.body.addEventListener('click', () => {
                    music.play();
                }, { once: true });
            });
            dialogueIndex = 0;
            showDialogue(sceneIndex, dialogueIndex);
        }
    }

    function hideAllCharacters() {
        console.log("Hiding all characters");
        scenes[currentScene].characters.forEach(character => {
            document.getElementById(character).style.display = "none";
        });
    }

    document.body.addEventListener("click", nextDialogue);

    // Play music if it's paused (for browser autoplay restrictions)
    if (music.paused) {
        music.play().catch(error => {
            console.log("Error playing music initially:", error);
            document.body.addEventListener('click', () => {
                music.play();
            }, { once: true });
        });
    }

    updateScene(currentScene);
});

           
