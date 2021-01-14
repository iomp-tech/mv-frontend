import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchCategories} from ".././redux/actions/categories";

import {
	MainSection,
    Categories,
    EventSection,
    ShopSection,
    TimetableSection,
    ServicesSection,
    AboutSection,
    TeacherSection,
    MagazineSection,
    EmailFormWrapper,
} from ".././components/";

const Home = () => {
    const dispatch = useDispatch();

    const categories = useSelector(({categories}) => categories.items);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Главная - IOMP</title>
            </Helmet>

			<MainSection />
            <Categories />
            {/* <EventSection /> */}

            <ShopSection />
            {/* <TimetableSection /> */}
            <ServicesSection />
            <AboutSection />

            <TeacherSection />
            {/* <MagazineSection /> */}
            {/* <EmailFormWrapper /> */}
        </>
    );
};

export default Home;
