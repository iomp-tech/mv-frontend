import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchMain} from "../.././redux/actions/main";

import EventSliderLoading from "./EventSliderLoading";

const MainSection = () => {
    const dispatch = useDispatch();

    const {isLoaded, content} = useSelector(({main}) => main);

    React.useEffect(() => {
        dispatch(fetchMain());
    }, []);

    return (
        <section className="main">
            <div className="container">
                {isLoaded ? (
                    <div className="main-wrapper">
                        <h1
                            className="main__title"
                            dangerouslySetInnerHTML={{__html: content.title}}
                        ></h1>
                        <p className="main__description">
                            {content.description}
                        </p>

                        <Link
                            to={content.buttonHref}
                            className="btn-bold_color main__btn"
                        >
                            {content.buttonText}
                        </Link>

                        <div className="circle-wrapper main-circle-wrapper">
                            <div className="circle-regular main-circle1"></div>
                            <div className="circle-bold main-circle2"></div>
                        </div>
                    </div>
                ) : (
                    <EventSliderLoading />
                )}
            </div>
        </section>
    );
};

export default MainSection;
