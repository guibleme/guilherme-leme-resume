import React from "react";

export function profileDescription(paragraphs) {
    let listObj = [];

    if (paragraphs.length > 0) {
        listObj = paragraphs;
    }

    return <div className="profile-description">
        {listObj.map(item => <p>{item}</p>)}
    </div>;
}
