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
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                integration.mainTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                integration.mainTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                integration.mainBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                integration.mainBottomHtml;
        }
    }, [Object.keys(integration).length]);

    return (
        <>
            <Helmet>
                <title>Главная - MASTER Vision</title>
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
