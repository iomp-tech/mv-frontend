import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchAbout} from "../.././redux/actions/about";

import AboutBlock from "./AboutBlock";
import AboutBlockLoading from "./AboutBlockLoading";

const AboutSection = () => {
    const dispatch = useDispatch();
    const aboutItems = useSelector(({about}) => about.items);
    const isLoaded = useSelector(({about}) => about.isLoaded);

    React.useEffect(() => {
        dispatch(fetchAbout());
    }, []);

    return (
        <section className="about">
            <div className="container">
                <div className="about-wrapper">
                    <h2 className="title about__title">О нас</h2>

                    <div className="about-block-wrapper">
                        {isLoaded
                            ? aboutItems.map((obj, index) => (
                                  <AboutBlock
                                      key={`${obj.id}_${index}`}
                                      {...obj}
                                  />
                              ))
                            : Array(3)
                                  .fill(0)
                                  .map((_, index) => (
                                      <div
                                          className="about-block"
                                          key={`about-block-${index}`}
                                      >
                                          <AboutBlockLoading />
                                      </div>
                                  ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
