import React from "react";

// type HorlyDataProps = {};

export default function HourlyCard() {
  // const { time, imgUrl, description } = props;
  const data = [1, 2, 3, 4, 5];

  return (
    <>
      {data.map(() => {
        <li>
          <p>{data[1]}</p>
          <img src="" alt="" />
        </li>;
      })}
    </>
  );
}
