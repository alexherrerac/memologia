var holding = false;
var track = document.getElementById('track');
var progress = document.getElementById('progress');
var play = document.getElementById('play');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var art = document.getElementById('art');
var current_track = 0;
var song, audio, duration;
var playing = false;
var songs = [{
    title: 'Nivel 1',
    artist: 'Game',
    url: 'Song/1.mp3',
    art: 'http://wallpapers.net/web/wallpapers/dark-forest-hd-wallpaper/400x400.jpg'
},
    
{
    title: 'Nivel 2',
    artist: 'Game',
    url: 'Song/2.mp3',
    art: 'https://www.quitocultura.info/wp-content/uploads/sites/www.quitocultura.info/images/2017/02/PIAGUAJE.jpg'
},

{
    title: 'Nivel 3',
    artist: 'Game',
    url: 'Song/3.mp3',
    art: 'https://www.quitocultura.info/wp-content/uploads/sites/www.quitocultura.info/images/2017/02/PIAGUAJE.jpg'
},

{
    title: 'Nivel 4',
    artist: 'Game',
    url: 'Song/4.mp3',
    art: 'https://pbs.twimg.com/profile_images/1003762295615447041/iIYwk7z5_400x400.jpg'
},

{
    title: 'Nivel 5',
    artist: 'Game',
    url: 'Song/5.mp3',
    art: 'https://secure.img1-ag.wfcdn.com/im/83521107/resize-h800%5Ecompr-r85/5670/56705630/Palm+Jungle+33%2527+L+x+20.5%2522+W+Wallpaper+Roll.jpg'
},

{
    title: 'Nivel 6',
    artist: 'Game',
    url: 'https://www.sshhtt.com/images/sampledata/animals/Grillogrillo.mp3',
    art: 'https://secure.img1-ag.wfcdn.com/im/83521107/resize-h800%5Ecompr-r85/5670/56705630/Palm+Jungle+33%2527+L+x+20.5%2522+W+Wallpaper+Roll.jpg'
},
{
    title: 'Nivel 7',
    artist: 'Game',
    url: 'Song/7.mp3',
    art: 'https://pbs.twimg.com/profile_images/1003762295615447041/iIYwk7z5_400x400.jpg'
},

{
    title: 'Nivel 8',
    artist: 'Game',
    url: 'Song/8.mp3',
    art: 'https://pbs.twimg.com/profile_images/1003762295615447041/iIYwk7z5_400x400.jpg'
},

{
    title: 'Nivel 9',
    artist: 'Game',
    url: 'Song/9.mp3',
    art: 'https://secure.img1-ag.wfcdn.com/im/83521107/resize-h800%5Ecompr-r85/5670/56705630/Palm+Jungle+33%2527+L+x+20.5%2522+W+Wallpaper+Roll.jpg'
},

{
    title: 'Nivel 10',
    artist: 'Game',
    url: 'Song/10.mp3',
    art: 'https://pbs.twimg.com/profile_images/1003762295615447041/iIYwk7z5_400x400.jpg'
},

];

window.addEventListener('load', init(), false);

function init() {
    song = songs[current_track];
    audio = new Audio();
    audio.src = song.url;
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
}


audio.addEventListener('timeupdate', updateTrack, false);
audio.addEventListener('loadedmetadata', function () {
    duration = this.duration;
}, false);
window.onmousemove = function (e) {
    e.preventDefault();
    if (holding) seekTrack(e);
}
window.onmouseup = function (e) {
    holding = false;
    console.log(holding);
}
track.onmousedown = function (e) {
    holding = true;
    seekTrack(e);
    console.log(holding);
}
play.onclick = function () {
    playing ? audio.pause() : audio.play();
}
audio.addEventListener("pause", function () {
    play.innerHTML = '<img class="pad" src="http://abarcarodriguez.com/lab/play.png" />';
    playing = false;
}, false);

audio.addEventListener("playing", function () {
    play.innerHTML = '<img src="http://abarcarodriguez.com/lab/pause.png" />';
    playing = true;
}, false);

function updateTrack() {
    curtime = audio.currentTime;
    percent = Math.round((curtime * 100) / duration);
    progress.style.width = percent + '%';
    handler.style.left = percent + '%';
}

function seekTrack(e) {
    event = e || window.event;
    var x = e.pageX - player.offsetLeft - track.offsetLeft;
    percent = Math.round((x * 100) / track.offsetWidth);
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;
    progress.style.width = percent + '%';
    handler.style.left = percent + '%';
    audio.play();
    audio.currentTime = (percent * duration) / 100
}
function nextTrack() {
    current_track++;
    current_track = current_track % (songs.length);
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
}

function prevTrack() {
    current_track--;
    current_track = (current_track == -1 ? (songs.length - 1) : current_track);
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
}

function updateInfo() {
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
    art.onload = function() {
        audio.play();
    }
}
