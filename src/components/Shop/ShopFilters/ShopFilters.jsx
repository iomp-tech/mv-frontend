import React from "react";

import ShopPrice from "./ShopPrice";
import ShopCategories from "./ShopCategories";
import ShopTeachers from "./ShopTeachers";
import ShopTime from "./ShopTime";

const ShopFilters = React.memo(() => {
    return (
        <div className="shop-filters">
            <ShopCategories />
            <ShopPrice />
            <ShopTeachers />
            <ShopTime />
        </div>
    );
});

export default ShopFilters;
