import React from "react";
import {Range} from "rc-slider";

const ShopPriceRange = React.memo(
    ({stateRange, setInput, postStateInput, minPrice, maxPrice}) => {
        return (
            <Range
                min={minPrice !== "" ? minPrice : 0}
                max={maxPrice !== "" ? maxPrice : 1}
                value={stateRange.value}
                onChange={(event) => setInput(event)}
                onAfterChange={(event) => postStateInput(event)}
            />
        );
    }
);

export default ShopPriceRange;
