import './App.css';
import Drumpad from './components/Drumpad';
import { useState } from 'react';
import Label from './components/Label';

function App() {

  const [pressedKey, setPressedKey] = useState('');

  const data = [
    {
      soundname: 'Heater 1',
      audioUrl: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
      key: 'q'
    },
    {
      soundname: 'Heater 2',
      audioUrl: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
      key: 'w'
    },
    {
      soundname: 'Heater 3',
      audioUrl: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
      key: 'e'
    },
    {
      soundname: 'Heater 4',
      audioUrl: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
      key: 'a'
    },
    {
      soundname: 'Clap',
      audioUrl: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
      key: 's'
    },
    {
      soundname: 'Open-HH',
      audioUrl: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
      key: 'd'
    },
    {
      soundname: `Kick-n'-Hat`,
      audioUrl: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
      key: 'z'
    },
    {
      soundname: 'Kick',
      audioUrl: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
      key: 'x'
    },
    {
      soundname: 'Closed-HH',
      audioUrl: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
      key: 'c'
    }
  ];

  const handleDisplay = (key) => {
    setPressedKey(key);
    // console.log(key);
  };

  const playAudio = (e) => {
    const clip = data.find((element) => element.key === e.key.toLowerCase());
    console.log(e.key);
    if (!clip) {
      return;
    }

    const audioClip = document.getElementById(clip.key.toUpperCase());
    audioClip.pause();
    audioClip.volume = .05;
    audioClip.play().catch();


    handleDisplay(clip.soundname);
  }

  return (
    <div className="App" onKeyDownCapture={playAudio} tabIndex={0}>
      <div className="wrapper" id='drum-machine' >
        <div className="drumpad-wrapper">
          {data.map((element) => <Drumpad data={element} display={handleDisplay} key={element.key} />)}
        </div>
        <div className="label-wrapper">
          <Label text={pressedKey} />
        </div>
      </div>
    </div>
  );
}

export default App;
