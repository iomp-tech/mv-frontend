import React from "react";

const InstituteItem = React.memo(
    ({title, content, toggleItemContent, toScrollDoc, size}) => {
        const [state, setState] = React.useState(false);

        const toggleState = () => {
            setState(!state);
        };

        const itemClick = (key) => {
            toScrollDoc();
            toggleItemContent(key);
        };

        return (
            <div className="institute-text-item">
                <p
                    className={`institute-text-item__title ${size}`}
                    onClick={toggleState}
                >
                    {title}
                </p>
                <ul
                    className={`institute-text-item-ul ${
                        state ? "institute-text-item-ul_active" : ""
                    }`}
                >
                    {content.map((key, index) => (
                        <li
                            className={`institute-text-item__li ${size}`}
                            onClick={() => itemClick(key)}
                            key={`institute-text-item__li-${index}`}
                        >
                            {key.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
);

export default InstituteItem;
