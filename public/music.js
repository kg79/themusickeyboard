
const keyCodes = [
    {'symb':'Q', 'numb':81},
    {'symb':'W', 'numb':87},
    {'symb':'E', 'numb':69},
    {'symb':'R', 'numb':82},
    {'symb':'T', 'numb':84},
    {'symb':'Y', 'numb':89},
    {'symb':'U', 'numb':85},
    {'symb':'I', 'numb':73},
    {'symb':'O', 'numb':79},
    {'symb':'P', 'numb':80},
    {'symb':'A', 'numb':65},
    {'symb':'S', 'numb':83},
    {'symb':'D', 'numb':68},
    {'symb':'F', 'numb':70},
    {'symb':'G', 'numb':71},
    {'symb':'H', 'numb':72},
    {'symb':'J', 'numb':74},
    {'symb':'K', 'numb':75},
    {'symb':'L', 'numb':76},
    {'symb':';', 'numb':186},
    {'symb':'Z', 'numb':90},
    {'symb':'X', 'numb':88},
    {'symb':'C', 'numb':67},
    {'symb':'V', 'numb':86},
    {'symb':'B', 'numb':66},
    {'symb':'N', 'numb':78},
    {'symb':'M', 'numb':77},
    {'symb':',', 'numb':188},
    {'symb':'.', 'numb':190},
    {'symb':'/', 'numb':191},
];

class Music {
    constructor(name, volume, index) {
	this.name = name;
	this.volume = volume;
	this.index = index;
	this.playing = false;
    }
    on() {
	if (this.playing === false) {
	    this.name = atx.createOscillator();
	    this.volume = atx.createGain();
	    this.name.frequency.value = stdPitch.value* eval(fractions[this.index].textContent);
        this.volume.gain.value = volume.value/10;
        this.name.type = wave.value;
	    this.name.connect(this.volume).connect(atx.destination);
	    this.name.start(0);
	    this.playing = true;
        tiles[this.index].style.border = 'solid red .1em';
	}
    }
    off() {
	this.name.stop(0);
	this.playing = false;
	tiles[this.index].style.border = 'solid black .1em';
    }
}

Music.prototype.sampleOn = function(ratio){
        this.name = atx.createOscillator();
	    this.volume = atx.createGain();
	    this.name.frequency.value = stdPitch.value* eval(ratio);
        this.volume.gain.value = volume.value/10;
        this.name.type = wave.value;
	    this.name.connect(this.volume).connect(atx.destination);
	    this.name.start(0);
}
Music.prototype.sampleOff = function() {
    this.name.stop(0);
}

let name0, name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11, name12, name13, name14, name15, name16, name17, name18, name19, name20, name21, name22, name23, name24, name25, name26, name27, name28, name29, name30;
let volume0, volume1, volume2, volume3, volume4, volume5, volume6, volume7, volume8, volume9, volume10, volume11, volume12, volume13, volume14, volume15, volume16, volume17, volume18, volume19, volume20, volume21, volume22, volume23, volume24, volume25, volume26, volume27, volume28, volume29, volume30;


let notes = [
    new Music(name0, volume0, 0),
    new Music(name1, volume1, 1),
    new Music(name2, volume2, 2),
    new Music(name3, volume3, 3),
    new Music(name4, volume4, 4),
    new Music(name5, volume5, 5),
    new Music(name6, volume6, 6),
    new Music(name7, volume7, 7),
    new Music(name8, volume8, 8),
    new Music(name9, volume9, 9),
    new Music(name10, volume10, 10),
    new Music(name11, volume11, 11),
    new Music(name12, volume12, 12),
    new Music(name13, volume13, 13),
    new Music(name14, volume14, 14),
    new Music(name15, volume15, 15),
    new Music(name16, volume16, 16),
    new Music(name17, volume17, 17),
    new Music(name18, volume18, 18),
    new Music(name19, volume19, 19),
    new Music(name20, volume20, 20),
    new Music(name21, volume21, 21),
    new Music(name22, volume22, 22),
    new Music(name23, volume23, 23),
    new Music(name24, volume24, 24),
    new Music(name25, volume25, 25),
    new Music(name26, volume26, 26),
    new Music(name27, volume27, 27),
    new Music(name28, volume28, 28),
    new Music(name29, volume29, 29),
    new Music(name30, volume30, 30),
];


window.addEventListener('keydown', e => {
    switch (e.keyCode) {
    case keyCodes[0].numb:
	notes[0].on();
	break;
    case keyCodes[1].numb:
	notes[1].on();
	break;
    case keyCodes[2].numb:
	notes[2].on();
	break;
    case keyCodes[3].numb:
	notes[3].on();
	break;
    case keyCodes[4].numb:
	notes[4].on();
	break;
    case keyCodes[5].numb:
	notes[5].on();
	break;
    case keyCodes[6].numb:
	notes[6].on();
	break;
    case keyCodes[7].numb:
	notes[7].on();
	break;
    case keyCodes[8].numb:
	notes[8].on();
	break;
    case keyCodes[9].numb:
	notes[9].on();
	break;
    case keyCodes[10].numb:
	notes[10].on();
	break;
    case keyCodes[11].numb:
	notes[11].on();
	break;
    case keyCodes[12].numb:
	notes[12].on();
	break;
    case keyCodes[13].numb:
	notes[13].on();
	break;
    case keyCodes[14].numb:
	notes[14].on();
	break;
    case keyCodes[15].numb:
	notes[15].on();
	break;
    case keyCodes[16].numb:
	notes[16].on();
	break;
    case keyCodes[17].numb:
	notes[17].on();
	break;
    case keyCodes[18].numb:
	notes[18].on();
	break;
    case keyCodes[19].numb:
	notes[19].on();
	break;
    case keyCodes[20].numb:
	notes[20].on();
	break;
    case keyCodes[21].numb:
	notes[21].on();
	break;
    case keyCodes[22].numb:
	notes[22].on();
	break;
    case keyCodes[23].numb:
	notes[23].on();
	break;
    case keyCodes[24].numb:
	notes[24].on();
	break;
    case keyCodes[25].numb:
	notes[25].on();
	break;
    case keyCodes[26].numb:
	notes[26].on();
	break;
    case keyCodes[27].numb:
	notes[27].on();
	break;
    case keyCodes[28].numb:
	notes[28].on();
	break;
    case keyCodes[29].numb:
	notes[29].on();
	break;
    }
});

window.addEventListener('keyup', e => {
    switch (e.keyCode) {
    case keyCodes[0].numb:
	notes[0].off();
	break;
    case keyCodes[1].numb:
	notes[1].off();
	break;
    case keyCodes[2].numb:
	notes[2].off();
	break;
    case keyCodes[3].numb:
	notes[3].off();
	break;
    case keyCodes[4].numb:
	notes[4].off();
	break;
    case keyCodes[5].numb:
	notes[5].off();
	break;
    case keyCodes[6].numb:
	notes[6].off();
	break;
    case keyCodes[7].numb:
	notes[7].off();
	break;
    case keyCodes[8].numb:
	notes[8].off();
	break;
    case keyCodes[9].numb:
	notes[9].off();
	break;
    case keyCodes[10].numb:
	notes[10].off();
	break;
    case keyCodes[11].numb:
	notes[11].off();
	break;
    case keyCodes[12].numb:
	notes[12].off();
	break;
    case keyCodes[13].numb:
	notes[13].off();
	break;
    case keyCodes[14].numb:
	notes[14].off();
	break;
    case keyCodes[15].numb:
	notes[15].off();
	break;
    case keyCodes[16].numb:
	notes[16].off();
	break;
    case keyCodes[17].numb:
	notes[17].off();
	break;
    case keyCodes[18].numb:
	notes[18].off();
	break;
    case keyCodes[19].numb:
	notes[19].off();
	break;
    case keyCodes[20].numb:
	notes[20].off();
	break;
    case keyCodes[21].numb:
	notes[21].off();
	break;
    case keyCodes[22].numb:
	notes[22].off();
	break;
    case keyCodes[23].numb:
	notes[23].off();
	break;
    case keyCodes[24].numb:
	notes[24].off();
	break;
    case keyCodes[25].numb:
	notes[25].off();
	break;
    case keyCodes[26].numb:
	notes[26].off();
	break;
    case keyCodes[27].numb:
	notes[27].off();
	break;
    case keyCodes[28].numb:
	notes[28].off();
	break;
    case keyCodes[29].numb:
	notes[29].off();
	break;
    }
});
