// import './Drumpad.css';

function Drumpad(props) {

    function handleAudioPlay() {
        const audioClip = document.getElementById(props.data.key.toUpperCase());
        audioClip.volume = .05;
        audioClip.play().catch(console.error);
    };

    return (
        <div className="drum-pad" id={props.data.key + '-pad'} onClick={() => {
            props.display(props.data.soundname);
            handleAudioPlay();
        }}>
            {props.data.key.toUpperCase()}
            <audio src={props.data.audioUrl} className="clip" id={props.data.key.toUpperCase()}></audio>
        </div>
    )
}


export default Drumpad;