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
    const {integration} = useSelector(
        ({integration_page}) => integration_page
    );

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }

        if (Object.keys(integration).length) {
            const script = document.createElement("script");

            const scriptText = document.createTextNode(integration.mainJs);

            script.appendChild(scriptText);

            document.querySelector("#vanila__js__page").innerHTML = "";
            document.querySelector("#vanila__js__page").appendChild(script);

            document.querySelector("#tags__js__page").innerHTML =
                integration.mainHtml;
        }
    }, [Object.keys(integration).length]);

    return (
        <>
            <Helmet>
                <title>Главная - IOMP</title>
            </Helmet>

            <MainSection />
            <Categories />
            <EventSection />

            <ShopSection />
            <TimetableSection />
            <ServicesSection />
            <AboutSection />

            <TeacherSection />
            <MagazineSection />
            <EmailFormWrapper />
        </>
    );
};

export default Home;
