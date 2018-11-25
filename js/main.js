;(function(){

    const playList = [{
        author: "led zeppelin",
        song: "Stairway to heaven",
        duration: "2:03"
    },
    {
        author: "queen",
        song: "Bohemian rhapsody",
        duration: "2:30"
    },
    {
        author: "lynyrd skynyrd",
        song: "Free bird",
        duration: "1:56"
    },
    {
        author: "deep purple",
        song: "Smoke on the water",
        duration: "3:03"
    },
    {
        author: "jimi hendrix",
        song: "All along the watchtower",
        duration: "2:53"
    },
    {
        author: "AC/DC",
        song: "Back in black",
        duration: "2:43"
    },
    {
        author: "queen",
        song: "We will rock you",
        duration: "2:13"            
    },
    {
        author: "metallica",
        song: "Enter sandman",
        duration: "3:03"            
    }
];

const playCount = document.querySelector('.ba-play-list');

const listPoint = document.getElementById('tmpl-point').innerHTML;

let pointHTML = '';
playCount.innerHTML = '';
playList.forEach(function (point) {
    pointHTML = listPoint.replace(/{{name}}/ig, point.song)
    .replace(/{{group}}/ig, point.author)
    .replace(/{{time}}/ig, point.duration);

    playCount.innerHTML += pointHTML;

})
})();
