import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchServices} from "../../redux/actions/services";

import ServicesBlock from "./ServicesBlock";
import ServicesBlockLoading from "./ServicesBlockLoading";

const ServicesSection = () => {
    const dispatch = useDispatch();
    const servicesItems = useSelector(({services}) => services.items);
    const {isLoaded} = useSelector(({services}) => services);
    const {size} = useSelector(({visually}) => visually);

    React.useEffect(() => {
        dispatch(fetchServices());
    }, []);

    return (
        <section className="services">
            <div className="container">
                <div className="services-wrapper">
                    <div className={`circle-bold ${size} services-circle1`}></div>
                    <div className={`circle-bold ${size} services-circle2`}></div>

                    <h2 className={`title ${size} services__title`}>
                        Раскройте свои сильные стороны
                    </h2>

                    <div className="services-block-wrapper">
                        {isLoaded
                            ? servicesItems.map((obj, index) => (
                                  <ServicesBlock
                                      key={`${obj.title}_${index}`}
                                      size={size}
                                      index={++index}
                                      {...obj}
                                  />
                              ))
                            : Array(3)
                                  .fill(0)
                                  .map((_, index) => (
                                      <ServicesBlockLoading key={index} />
                                  ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
