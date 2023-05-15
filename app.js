const $video = document.querySelector('video');
const $playBtn = document.querySelector('#play-btn');
const $pauseBtn = document.querySelector('#pause-btn');
const $backwardBtn = document.querySelector('#backward-btn');
const $forwardBtn = document.querySelector('#forward-btn');
const $progressBar = document.querySelector('#progress');

$playBtn.addEventListener('click', handlePlay);
$pauseBtn.addEventListener('click', handlePause);
$backwardBtn.addEventListener('click', handleBackward);
$forwardBtn.addEventListener('click', handleForward);
$progressBar.addEventListener('input', handleInput);

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handlePlay(){
    $video.play();
    $playBtn.hidden = true;
    $pauseBtn.hidden = false; 
    console.log('play');
};

function handlePause(){
    $video.pause();
    $pauseBtn.hidden = true;
    $playBtn.hidden = false;
    console.log('pause');
};

function handleBackward(){
    $video.currentTime = $video.currentTime - 10;
    console.log('backward');
};

function handleForward(){
    $video.currentTime = $video.currentTime + 10;
    console.log('forward');
};

function handleLoaded(){
    $progressBar.max = $video.duration;
    console.log('Cargado', $video.duration);
};

function handleTimeUpdate(){
    $progressBar.value = $video.currentTime;
    console.log('Tiempo actual', $video.currentTime);
};

function handleInput(){
    $video.currentTime = $progressBar.value;
    console.log($progressBar.value);
};