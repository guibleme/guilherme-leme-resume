import React from "react";

export function educationBlock(period, titleName, location) {
    return <div className="education-block">
        <div className="education-time">
            <h5>{period}</h5>
        </div>
        <div className="education-text">
            <h5>{titleName}</h5>
        </div>
        <div>
            <h5 className="text-right  weak-text">{location}</h5>
        </div>
    </div>;
}
