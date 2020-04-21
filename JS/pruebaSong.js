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
    url: 'http://www.sshhtt.com/images/sampledata/animals/BUHObuho.mp3',
    art: 'http://wallpapers.net/web/wallpapers/dark-forest-hd-wallpaper/400x400.jpg'
},
    
{
    title: 'Nivel 2',
    artist: 'Game',
    url: 'https://www.sshhtt.com/images/sampledata/animals/Caballohorse_1.mp3',
    art: 'https://www.quitocultura.info/wp-content/uploads/sites/www.quitocultura.info/images/2017/02/PIAGUAJE.jpg'
},

{
    title: 'Nivel 3',
    artist: 'Game',
    url: 'https://www.sshhtt.com/images/sampledata/animals/Cerdopig.mp3',
    art: 'https://www.quitocultura.info/wp-content/uploads/sites/www.quitocultura.info/images/2017/02/PIAGUAJE.jpg'
},

{
    title: 'Nivel 4',
    artist: 'Game',
    url: 'https://www.sshhtt.com/images/sampledata/animals/Cuervocuervo.mp3',
    art: 'https://pbs.twimg.com/profile_images/1003762295615447041/iIYwk7z5_400x400.jpg'
},

{
    title: 'Nivel 5',
    artist: 'Game',
    url: 'https://www.sshhtt.com/images/sampledata/animals/ElefanteELEPHANT.mp3',
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
    url: 'https://www.sshhtt.com/images/sampledata/animals/Lionlion_roar.mp3',
    art: 'https://pbs.twimg.com/profile_images/1003762295615447041/iIYwk7z5_400x400.jpg'
},

{
    title: 'Nivel 8',
    artist: 'Game',
    url: 'https://www.sshhtt.com/images/sampledata/animals/Aullido%20de%20lobo-Efecto%20de%20sonido.mp3',
    art: 'https://pbs.twimg.com/profile_images/1003762295615447041/iIYwk7z5_400x400.jpg'
},

{
    title: 'Nivel 9',
    artist: 'Game',
    url: 'https://storage.de.cloud.ovh.net/v1/AUTH_b2cffe8f45324c2bba39e8db1aedb58f/cloudconvert-files/033a9e02-1352-42c4-9abb-4698ee8bf07e/9.mp3?temp_url_sig=f978e860df679ba602569894282704bfe4ce510d&temp_url_expires=1587568827&inline',
    art: 'https://secure.img1-ag.wfcdn.com/im/83521107/resize-h800%5Ecompr-r85/5670/56705630/Palm+Jungle+33%2527+L+x+20.5%2522+W+Wallpaper+Roll.jpg'
},

{
    title: 'Nivel 10',
    artist: 'Game',
    url: 'https://storage.de.cloud.ovh.net/v1/AUTH_b2cffe8f45324c2bba39e8db1aedb58f/cloudconvert-files/0085dea7-a9a4-4078-a32a-32c45bac8d0e/10.mp3?temp_url_sig=66ef94b107a6addb53bd5d721fdd990035594caf&temp_url_expires=1587568944&inline',
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
