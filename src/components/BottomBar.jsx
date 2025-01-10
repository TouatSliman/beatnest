import React from "react";

const BottomBar = () => {
  const btnStyle = {
    width: "100%",
    height: "100%",
    color: "green",
    fontSize: "12px",
    cursor: "pointer",
    userSelect: "none",
    margin: "0",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="flex fixed bottom-0 w-full h-16 bg-black">
      {/* Sound detail */}
      <div className="w-48 flex items-center justify-start gap-2 pl-1">
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
            <i style={btnStyle} className="fa-solid fa-backward"></i>
          </button>
          <button className="p-1 bg-white w-7 h-7 rounded-full flex justify-center items-center">
            <i style={btnStyle} className="fa-solid fa-play"></i>
          </button>
          <button className="p-1 bg-white w-7 h-7 rounded-full flex justify-center items-center">
            <i style={btnStyle} className="fa-solid fa-forward"></i>
          </button>
        </div>
        <input
          style={{ accentColor: "green" }}
          className="w-[80%] m-0"
          type="range"
        />
      </div>
      {/* Setting */}
      <div className="w-48 flex flex-col justify-around items-center">
        <div className="flex justify-around w-32">
          <button className="p-1 bg-white w-7 h-7 rounded-full flex justify-center items-center">
            <i style={btnStyle} className="fa-solid fa-repeat"></i>
          </button>
          <button className="p-1 bg-white w-7 h-7 rounded-full flex justify-center items-center">
            <i style={btnStyle} className="fa-solid fa-random"></i>
          </button>
          <button className="p-1 bg-white w-7 h-7 rounded-full flex justify-center items-center">
            <i style={btnStyle} className="fa-solid fa-list"></i>
          </button>
        </div>
        <div className="flex justify-between w-32">
          <i className="fa-solid fa-volume-high text-white"></i>
          <input
            style={{ accentColor: "green" }}
            className="w-[80%] m-0"
            type="range"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
