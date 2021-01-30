import React from "react";
import {Link} from "react-router-dom";

const ShopSectionBtn = React.memo(({size}) => {
    return (
        <div className="shop-btn-wrapper">
            <Link to="/shop" className={`btn-bold_gray shop__btn ${size}`}>
                Показать еще
            </Link>
        </div>
    );
});

export default ShopSectionBtn;
