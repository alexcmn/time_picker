import React, { useState } from "react";

export default function TimePicker({ timeFormat, hourUp, hourDown, hour, minuteUp, minuteDown, minute, handleChange, amPm, handleOptionChange }) {

    return (
        <div className="time">
            {
                timeFormat.timeFormatValue === '24' ?
                    <div className="t-pick">
                        <div className="hour">
                            <div className="up" onClick={hourUp}></div>
                            <span>{hour}</span>
                            {/* <input type="number" className="hr" value={hour} id="hr" onChange={handleChange} /> */}
                            <div className="dwn" onClick={hourDown}></div>
                        </div>
                        <div className="border">:</div>
                        <div className="minutes">
                            <div className="up" onClick={minuteUp}></div>
                            <span>{minute}</span>
                            {/* <input type="number" className="min" value={minute} id="min" onChange={handleChange} /> */}
                            <div className="dwn" onClick={minuteDown}></div>
                        </div>
                    </div>
                    : (
                        timeFormat.timeFormatValue === '12' ?
                            <div className="t-amPm">
                                <div className="radio">
                                    <input type="radio" id="time-p-am" value="am" checked={amPm === 'am'} onChange={handleOptionChange} />
                                    <label htmlFor="time-p-am">AM</label>
                                    <input type="radio" id="time-p-pm" value="pm" checked={amPm === 'pm'} onChange={handleOptionChange} />
                                    <label htmlFor="time-p-pm">PM</label>
                                    <span aria-hidden="true" className={`${amPm === 'pm' ? 'right' : ''}`}></span>
                                </div>
                                {
                                    amPm ?
                                    <div className="t-pick">
                                        <div className="hour">
                                            <div className="up" onClick={hourUp}></div>
                                            <span>{hour}</span>
                                            {/* <input type="number" className="hr" value={hour} id="hr" onChange={handleChange} /> */}
                                            <div className="dwn" onClick={hourDown}></div>
                                        </div>
                                        <div className="border">:</div>
                                        <div className="minutes">
                                            <div className="up" onClick={minuteUp}></div>
                                            <span>{minute}</span>
                                            {/* <input type="number" className="min" value={minute} id="min" onChange={handleChange} /> */}
                                            <div className="dwn" onClick={minuteDown}></div>
                                        </div>
                                    </div>
                                    : ''
                                }
                            </div>
                            : ''
                    )
            }
        </div>
    );
}
