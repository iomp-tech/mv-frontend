import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchPolicy} from "../redux/actions/policy";

const Privacy = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useSelector(({policy}) => policy);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!items.length) {
            dispatch(fetchPolicy());
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>
                    Политика в отношении обработки персональных данных -
                    MasterVision
                </title>
            </Helmet>
            <div className="privacy">
                <div className="container">
                    <div className="privacy-wrapper">
                        <h2 className={`title privacy__title`}>
                            Политика конфиденциальности
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

export default Privacy;
