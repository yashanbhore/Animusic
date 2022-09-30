console.log("Welcome to Anisong");
//Initialization
let songIndex = 1;
let audioElement = new Audio('song/1.mp3');
let songlistplay = document.getElementById('songlistplay')
let mp = document.getElementById('masterPlay');
let mn = document.getElementById('mastersname');
let sip = document.getElementById("songItemPlay");
let sip1 = document.getElementById('1')
let sip2 = document.getElementById('2')
let sip3 = document.getElementById('3')
let sip4 = document.getElementById('4')
let myProgressbar = document.getElementById('ProgressBar')
let songItem = Array.from(document.getElementsByClassName('songItem'))

let songs = [
        { songName: "Unravel", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
        { songName: "Rumbling", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
        { songName: "Your lie in april", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
        { songName: "Again", filePath: "song/4.mp3", coverPath: "covers/4.jpg" }
]
songItem.forEach((Element, i) => {
        Element.getElementsByTagName('img')[0].src = songs[i].coverPath;
        Element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


mp.addEventListener('click', () => {


        if (audioElement.paused || audioElement.currentTime <= 0) {
                audioElement.play();
                mp.classList.remove('fa-circle-play');
                mp.classList.add('fa-circle-pause');


        }


        else {
                audioElement.pause();
                mp.classList.remove('fa-circle-pause');
                mp.classList.add('fa-circle-play');
        }
})

audioElement.addEventListener('timeupdate', () => {
        console.log('timeupdate');
        console.log(audioElement.currentTime)
        progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        console.log(progress);
        myProgressbar.value = progress;

})

myProgressbar.addEventListener('change', () => {
        audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
        console.log(audioElement.duration)
})

const makeAllPlays = () => {

        Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
                Element.classList.remove('fa-circle-pause')
                Element.classList.add('fa-circle-play');
        })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
        Element.addEventListener('click', (e) => {
                console.log(e.target);
                makeAllPlays();
                songIndex = parseInt(e.target.id);
                e.target.classList.remove('fa-circle-play')
                e.target.classList.add('fa-circle-pause')
                mp.classList.remove('fa-circle-play')
                mp.classList.add('fa-circle-pause')
                myProgressbar.value = 0
                audioElement.currentTime = 0;
                audioElement.src = `song/${songIndex}.mp3`
                audioElement.play();
                mn.innerText = songs[songIndex - 1].songName


        })
})
document.getElementById('previous').addEventListener('click', () => {
        if (songIndex == 1) {
                songIndex = 4;
                console.log(songIndex);
        }
        else {
                songIndex -= 1;
        }
        makeAllPlays();
        if (songIndex == 1) {
                sip1.classList.remove('fa-circle-play')
                sip1.classList.add('fa-circle-pause')
        }
        else if (songIndex == 2) {
                sip2.classList.remove('fa-circle-play')
                sip2.classList.add('fa-circle-pause')
        }
        else if (songIndex == 3) {
                sip3.classList.remove('fa-circle-play')
                sip3.classList.add('fa-circle-pause')
        }
        else if (songIndex == 4) {
                sip4.classList.remove('fa-circle-play')
                sip4.classList.add('fa-circle-pause')
        }

        audioElement.src = `song/${songIndex}.mp3`
        mn.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        mp.classList.remove('fa-circle-play')
        mp.classList.add('fa-circle-pause')
})
document.getElementById('next').addEventListener('click', () => {
        if (songIndex >= 4) {
                songIndex = 1;
        }
        else {
                songIndex += 1;
        }
        makeAllPlays();
        if (songIndex == 1) {
                sip1.classList.remove('fa-circle-play')
                sip1.classList.add('fa-circle-pause')
        }
        else if (songIndex == 2) {
                sip2.classList.remove('fa-circle-play')
                sip2.classList.add('fa-circle-pause')
        }
        else if (songIndex == 3) {
                sip3.classList.remove('fa-circle-play')
                sip3.classList.add('fa-circle-pause')
        }
        else if (songIndex == 4) {
                sip4.classList.remove('fa-circle-play')
                sip4.classList.add('fa-circle-pause')
        }
        audioElement.src = `song/${songIndex}.mp3`
        mn.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        mp.classList.remove('fa-circle-play')
        mp.classList.add('fa-circle-pause')
})
