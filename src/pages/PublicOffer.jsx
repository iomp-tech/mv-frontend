import React from "react";
import {Helmet} from "react-helmet";

import {DOMEN} from ".././api";

const PublicOffer = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Публичная оферта - IOMP</title>
            </Helmet>
            <div className="privacy">
                <div className="container">
                    <div className="privacy-wrapper">
                        <h2 className="title privacy__title">
                            Публичная оферта
                        </h2>
                        <div className="privacy-text">
                            <div className="privacy-text-block">
                                <p className="privacy-text-block__description"></p>
                            </div>

                            <div className="privacy-text-block">
                                <iframe
                                    className="privacy-text-block__iframe"
                                    src={`${DOMEN}/public/storage/all/Public-Offer.pdf`}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PublicOffer;
