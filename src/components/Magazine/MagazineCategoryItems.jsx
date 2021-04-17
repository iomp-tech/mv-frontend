import React from 'react';

const MagazineCategoryItems = React.memo(
    ({title, id, keyId, toggleDirections}) => {
        return (
            <span
                id={`directions__span-${keyId}`}
                className={`directions__span`}
                onClick={() => toggleDirections(id, keyId)}
            >
                {title}
            </span>
        );
    }
);

export default MagazineCategoryItems;