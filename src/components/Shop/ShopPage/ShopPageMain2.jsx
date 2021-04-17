import React from "react";
import axios from "axios";

import moment from "moment";
import "moment/locale/ru";

import ShopPageFormMain2 from "./ShopPageFormMain2";

const ShopPageMain2 = ({
    subtitle,
    title,
    description,
    range,
    minDate,
    maxDate,
    date,
    id_awo,
    action,
    formId,
    formVc,
}) => {
    const onSubmitMain2 = (formData) => {
        const newData = {
            Contact: {
                email: formData.email,
                id_newsletter: id_awo,
                id_advertising_channel_page: 0,
            },
            required_fields: {
                email: 1,
            },
            formId: formId,
            formVc: formVc,
            _aid: "",
            _vcaid: "",
        };
        axios
            .post(action, newData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                window.location.href = action;
            })
            .catch(() => {
                return false;
            });
    };

    return (
        <section className="shop-page-main2" id="shop-page-main2">
            <div className="container">
                <div className="shop-page-main2-wrapper">
                    <p className={`shop-page-main2__subtitle`}>
                        {subtitle}
                    </p>
                    <h1
                        className={`shop-page-main2__title`}
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                    <p className={`shop-page-main2__description`}>
                        {description}
                    </p>

                    <div className="circle-wrapper main-circle-wrapper">
                        <div className="circle-regular main-circle1"></div>
                        <div
                            className={`circle-bold main-circle2`}
                        ></div>
                    </div>

                    {range ? (
                        <div className="shop-page-main2-date">
                            <div className="shop-page-main2-date-left">
                                <span
                                    className={`shop-page-main2__date-range`}
                                >
                                    <b>Дата старта:</b>
                                </span>
                            </div>
                            <div className="shop-page-main2-date-right">
                                <span
                                    className={`shop-page-main2__date-range`}
                                >
                                    <b>с:</b>{" "}
                                    {moment(minDate, "YYYY-MM-DD, HH:mm")
                                        .locale("ru")
                                        .format("DD MMMM, HH:mm")}
                                </span>
                                <span
                                    className={`shop-page-main2__date-range`}
                                >
                                    <b>до:</b>{" "}
                                    {moment(maxDate, "YYYY-MM-DD, HH:mm")
                                        .locale("ru")
                                        .format("DD MMMM, HH:mm")}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className={`shop-page-main2-date`}>
                            <div className="shop-page-main2-date-left">
                                <span
                                    className={`shop-page-main2__date`}
                                >
                                    <b>Дата старта:</b>
                                </span>
                            </div>
                            <div className="shop-page-main2-date-right">
                                <span
                                    className={`shop-page-main2__date`}
                                >
                                    {moment(date, "YYYY-MM-DD, HH:mm")
                                        .locale("ru")
                                        .format("DD MMMM, HH:mm")}
                                </span>
                            </div>
                        </div>
                    )}

                    <ShopPageFormMain2 onSubmit={onSubmitMain2} />
                </div>
            </div>
        </section>
    );
};

export default ShopPageMain2;
