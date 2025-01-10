import React from "react";
import { useState, useRef } from "react";

const BottomBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isRepeat, setRepeat] = useState(false);
  const [isShuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef(null);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const increaseRange = () => {
    setCurrentTime((prevValue) => {
      if (prevValue < duration) {
        return prevValue + 1;
      }
      return prevValue;
    });
  };

  const play = () => {
    if (document.getElementById("audio") === null) {
      console.error("Audio element is null");
      //return;
    }
    if (isPlaying) {
      clearInterval(intervalRef.current);
      //document.getElementById("audio").pause();
    } else {
      intervalRef.current = setInterval(increaseRange, 100);
      //document.getElementById("audio").play();
    }
    setIsPlaying(!isPlaying);
  };
  const repeat = () => {
    setRepeat(!isRepeat);
  };
  const handleCurrentTimeChange = (event) => {
    setCurrentTime(event.target.value);
    //document.getElementById("audio").currentTime = event.target.value;
  };
  return (
    <div className="flex fixed bottom-0 w-full h-16 bg-black">
      {/* Sound detail */}
      <div className="w-48 flex items-center justify-start gap-2 pl-2">
        <img
          className="w-16 h-12 overflow-hidden rounded-md"
          src="https://picsum.photos/200/300"
          alt=""
        />
        <div className="w-32">
          <p className="text-white font-semibold text-md w-fit">Song Name</p>
          <p className="text-gray-400 text-xs w-fit">Singer Name</p>
        </div>
      </div>
      {/* Controls */}
      <div className="w-full flex flex-col justify-around items-center">
        <div className="flex justify-between w-32">
          <button className="p-1 bg-white w-7 h-7 rounded-full flex justify-center items-center">
            <i className="fa-solid fa-backward text-sm mr-[0.2rem]"></i>
          </button>
          <button
            onClick={play}
            className="p-1 bg-white w-7 h-7 rounded-full flex justify-center items-center"
          >
            <i
              className={
                isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play ml-[0.2rem]"
              }
            ></i>
          </button>
          <button className="p-1 bg-white w-7 h-7 rounded-full flex justify-center items-center">
            <i className="fa-solid fa-forward text-sm ml-[0.2rem]"></i>
          </button>
        </div>
        <input
          style={{ accentColor: "green" }}
          className="w-[80%] m-0"
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleCurrentTimeChange}
        />
      </div>
      {/* Setting */}
      <div className="w-48 flex flex-col justify-around items-center">
        <div className="flex justify-around w-32">
          <button
            onClick={repeat}
            className={
              "p-1 w-7 h-7 rounded-full flex justify-center items-center"
            }
          >
            <i
              className={
                isRepeat
                  ? "fa-solid fa-repeat text-white"
                  : "fa-solid fa-repeat text-green-600"
              }
            ></i>
          </button>
          <button
            onClick={() => setShuffle(!isShuffle)}
            className={
              "p-1 w-7 h-7 rounded-full flex justify-center items-center"
            }
          >
            <i
              className={
                isShuffle
                  ? "fa-solid fa-random text-white"
                  : "fa-solid fa-random text-green-600"
              }
            ></i>
          </button>
          <button className="p-1w-7 h-7 rounded-full flex justify-center items-center">
            <i className="fa-solid fa-list text-green-600"></i>
          </button>
        </div>
        <div className="flex justify-between w-32">
          <i
            className={
              volume > 0
                ? volume > 30
                  ? volume > 70
                    ? "fa-solid fa-volume-high text-green-600"
                    : "fa-solid fa-volume-low text-green-600"
                  : "fa-solid fa-volume-off text-green-600"
                : "fa-solid fa-volume-xmark text-white"
            }
          ></i>
          <input
            style={{ accentColor: "green" }}
            className="w-[80%] m-0"
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
