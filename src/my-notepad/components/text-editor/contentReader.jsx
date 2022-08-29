import { useState } from "react";
import useCurrentNote from "../notes/hooks/useCurrentNote";
import { useSpeechSynthesis } from "react-speech-kit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeHigh,
  faVolumeMute,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useEffect } from "react";

export default function ContentReader() {

  const optionRef = useRef(null);
  const optionButtonRef = useRef(null);

  const { note, state, dispatch } = useCurrentNote();
  const {isReading} = state.textEditor;
  const {pitch, speed, voiceIndex} = state.textEditor.readerSettings;
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const startReading = () => {
    dispatch({type : 'textEditor/reading', payload : true});
  }
  
  const stopReading = () => {
    dispatch({type : 'textEditor/reading', payload : false});
  }

  const { speak, cancel, speaking, voices } = useSpeechSynthesis({
    onEnd: () => stopReading(),
  });

  // const [pitch, setPitch] = useState(1);
  // const [speed, setSpeed] = useState(1);
  // const [voiceIndex, setVoiceIndex] = useState(null);

  const voice = voices[voiceIndex] || null;

  const enableReader = () => {
    speak({ text: note.content, voice, rate : speed, pitch});
    startReading();
  };

  const disableReader = () => {
    if (speaking) cancel();
    stopReading();
  };

  useEffect(() => {
    if(!isReading) cancel();
  }, [isReading]);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      e.stopPropagation();
      if (
        !optionRef.current?.contains(e.target) &&
        !optionButtonRef.current?.contains(e.target) &&
        isOptionOpen
      )
        setIsOptionOpen(false);
    });
  }, [isOptionOpen]);

  const option = () => {

    return (
      <div ref={optionRef} className="content-reader-options flex-con-2 fcol">
        <p>Voice</p>

        <select
          value={voiceIndex || ""}
          onChange={(event) => {
            dispatch({type : 'textEditor/readerSettings/update', payload : {voiceIndex : event.target.value}})
            // setVoiceIndex(event.target.value);
          }}
        >
          <option value="">Default</option>
          {voices.map((option, index) => (
            <option key={option.voiceURI} value={index}>
              {`${option.lang} - ${option.name}`}
            </option>
          ))}
        </select>

        <p>Speed : {speed}</p>
        <input
          className="slider"
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={speed}
          onChange={(event) => {
            dispatch({type : 'textEditor/readerSettings/update', payload : {speed : Number(event.target.value)}})
            // setSpeed(event.target.value);
          }}
        />

        <p>Pitch : {pitch}</p>
        <input
          className="slider"
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={pitch}
          onChange={(event) => {
            dispatch({type : 'textEditor/readerSettings/update', payload : {pitch : event.target.value}})
            // setPitch(event.target.value);
          }}
        />

        <small>Restart Reading to see the effect</small>

      </div>
    );

  };

  return (
    <>
      <div className="content-reader flex-con">
        {isOptionOpen && option()}

        <FontAwesomeIcon
          ref={optionButtonRef}
          onClick={() => setIsOptionOpen(!isOptionOpen)}
          className="caret-up-icon selectable"
          icon={faCaretUp}
        />

        {isReading ? (
          <FontAwesomeIcon
            onClick={disableReader}
            className="reader-icon selectable"
            icon={faVolumeHigh}
          />
        ) : (
          <FontAwesomeIcon
            onClick={enableReader}
            className="reader-icon selectable"
            icon={faVolumeMute}
          />
        )}
      </div>
    </>
  );
}
