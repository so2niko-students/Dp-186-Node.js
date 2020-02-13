function getRandomParticipant() { 
    const participants = [ 
        "Vitalii", 
        "Stan", 
        "Nikolay", 
        "Alexandr", 
        "Aleksey", 
        "Irina", 
        "Andrii", 
        "Anton", 
        "Oksana", 
    ];
    const randomNumber = Math.floor(Math.random() * participants.length);
    const participant = participants[randomNumber];
    alert(participant);
}

document.querySelector('.lucky').addEventListener('click', getRandomParticipant);