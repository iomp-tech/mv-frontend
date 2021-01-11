import React from "react";
import {Link} from "react-router-dom";

const TimetableCategoriesItems = React.memo(
    ({filters, title, keyId, id, toggleDirections}) => {
        return (
            <span
                id={`directions__span-${keyId}`}
                className="directions__span"
                onClick={() => toggleDirections(id, keyId)}
            >
                {title}
            </span>
        );
    }
);

export default TimetableCategoriesItems;
