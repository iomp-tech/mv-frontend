import React from "react";

const InstituteItem = React.memo(
    ({title, contentFile, contentText, toggleItemContent, toScrollDoc}) => {
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
                <p className="institute-text-item__title" onClick={toggleState}>
                    {title}
                </p>
                <ul
                    className={`institute-text-item-ul ${
                        state ? "institute-text-item-ul_active" : ""
                    }`}
                >
                    {contentFile !== null
                        ? contentFile.map((key, index) => (
                              <li
                                  className="institute-text-item__li"
                                  onClick={() => itemClick(key)}
                                  key={`institute-text-item__li-${index}`}
                              >
                                  {key.title}
                              </li>
                          ))
                        : contentText.map((key, index) => (
                              <li
                                  className="institute-text-item__li"
                                  onClick={() => toggleItemContent(key)}
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
