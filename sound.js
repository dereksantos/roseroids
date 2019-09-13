function randInt(min, max) {
    var range = max - min;
    var rand = Math.floor(Math.random() * (range + 1));
    return min + rand;
}

const ouchSoundUrls = ['assets/ouch.m4a', 'assets/dangit.m4a', 'assets/owy.m4a'];
let ouchSounds = ouchSoundUrls.map(url => {
    const sound = new Audio();
    sound.src = url;
    return sound;
});

const dieSoundUrls = ['assets/demapples.m4a', 'assets/gotcha.m4a'];
let dieSounds = dieSoundUrls.map(url => {
    const sound = new Audio();
    sound.src = url;
    return sound;
});

const playOuchSound = () => {
    const index = randInt(0, ouchSounds.length - 1);
    const sound = ouchSounds[index];
    sound.play();
};

const playDieSound = () => {
    const index = randInt(0, dieSounds.length - 1);
    const sound = dieSounds[index];
    sound.play();
};
