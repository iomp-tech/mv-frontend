import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchOfferta} from "../redux/actions/offerta";

const PublicOffer = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useSelector(({offerta}) => offerta);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!items.length) {
            dispatch(fetchOfferta());
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Публичная оферта - MASTER Vision</title>
            </Helmet>

            <div className="privacy">
                <div className="container">
                    <div className="privacy-wrapper">
                        <h2 className={`title privacy__title`}>
                            Публичная оферта
                        </h2>

                        <div className={`privacy-text`}>
                            {isLoaded &&
                                items.map((item, index) => (
                                    <div
                                        className={`privacy-text-block`}
                                        key={`privacy-text-block-${index}-policy`}
                                    >
                                        <h3
                                            className={`privacy-text-block__title`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className={`privacy-text-block__description`}
                                            dangerouslySetInnerHTML={{
                                                __html: item.description,
                                            }}
                                        ></p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PublicOffer;
