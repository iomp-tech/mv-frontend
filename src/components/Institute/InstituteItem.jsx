import React from "react";

const InstituteItem = React.memo(({title, contentFile, toggleItemContent}) => {
    const [state, setState] = React.useState(false);

    const toggleState = () => {
        setState(!state);
    };

    return (
        <div className="institute-text-item">
            <p className="institute-text-item__title" onClick={toggleState}>
                {title}
            </p>
            <ul
                className={`institute-text-item-ul ${
                    state ? "institute-text-item-ul_active" : ""
                }`}
            >
                {contentFile.map((key, index) => (
                    <li
                        className="institute-text-item__li"
                        onClick={() => toggleItemContent(key.file)}
                        key={`institute-text-item__li-${index}`}
                    >
                        {key.title}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default InstituteItem;
