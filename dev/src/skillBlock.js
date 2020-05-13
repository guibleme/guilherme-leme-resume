import React from "react";

export function skillBlock(skillName, skillNumber) {
    return <div className="skill-wrapper">
        <h6 className="mb-1">
            {skillName}
        </h6>
        <div className="skill-outer">
            <div className={`skill-inner ${skillNumber}`}></div>
        </div>
    </div>;
}
