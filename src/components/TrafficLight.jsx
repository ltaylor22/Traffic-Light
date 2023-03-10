import { useState } from "react";

export function TrafficLight() {
  const [color, setColor] = useState("");

  return (
    <div className="trafficlight">
      <div
        className={"red light" + (color === "red" ? " on" : "")}
        onClick={() => {
          setColor("red");
        }}
      ></div>
      <div
        className={"yellow light" + (color === "yellow" ? " on" : "")}
        onClick={() => {
          setColor("yellow");
        }}
      ></div>
      <div
        className={"green light" + (color === "green" ? " on" : "")}
        onClick={() => {
          setColor("green");
        }}
      ></div>
    </div>
  );
}
