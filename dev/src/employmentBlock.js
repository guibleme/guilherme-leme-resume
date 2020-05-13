import React from "react";

export function employmentBlock(period, position, company, descriptionList) {
    let listObj = [];

    if (descriptionList.length > 0) {
        listObj = descriptionList;
    }

    return <div className="employment-block">
        <div className="employment-time">
            <h5>{period}</h5>
        </div>
        <div className="employment-text">
            <h4>{position} <span className="weak-text">at {company}</span></h4>
            <ul className="bullet-list--noIndent">
                {listObj.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    </div>;
}
