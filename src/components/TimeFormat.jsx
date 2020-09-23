import React from "react";

export default function TimeFormat({ time, toggleCheck, format }) {
  return (
    <div className={`f${format}`} onClick={toggleCheck} id={format}>
      <input
        type="checkbox"
        id={`ftime-${format}`}
        name={`fname-${format}`}
        value={format}
        checked={time.timeFormatValue === format ? true : false}
        onClick={(event) => toggleCheck(event)}
      />
      <label className={`f${format}-wrapp`} htmlFor={`ftime-${format}`} />
      <span>{format === "12" ? "12h" : "24h"}</span>
    </div>
  );
}
