"use client";
import React from "react";

const ConsoleComp = (props: any) => {
  const { console } = props;
  return (
    <div>
      <button onClick={() => console.log(console)}></button>
    </div>
  );
};

export default ConsoleComp;
