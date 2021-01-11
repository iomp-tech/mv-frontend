import React from "react";
import {Link} from "react-router-dom";

const ShopSectionBtn = React.memo(() => {
    return (
        <div className="shop-btn-wrapper">
            <Link to="/shop" className="btn-bold_gray shop__btn">
                Показать еще
            </Link>
        </div>
    );
});

export default ShopSectionBtn;
