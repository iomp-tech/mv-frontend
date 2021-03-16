import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchTeacherMain} from ".././redux/actions/teacher";

import {
    TeacherBlock,
    TeacherModal,
    TeacherBlockLoading,
    ShopSection,
    MagazineSection,
    EmailFormWrapper,
} from ".././components/";

const Teacher = () => {
    const dispatch = useDispatch();

    const {itemsMain, isLoaded} = useSelector(({teacher}) => teacher);
    const {size, rgb, bgColor} = useSelector(({visually}) => visually);
    const {integration} = useSelector(({integration_page}) => integration_page);

    const [TeacherModalBool, setTeacherModalBool] = React.useState(false);
    const [activeTeacherItems, setActiveTeacherItems] = React.useState();

    const TeacherModalRef = React.useRef();

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(itemsMain).length) {
            dispatch(fetchTeacherMain());
        }

        document.body.addEventListener("click", handTeacherModalBool);
    }, []);

    React.useEffect(() => {
        if (Object.keys(integration).length) {
            const script = document.createElement("script");

            const scriptText = document.createTextNode(integration.teachersJs);

            script.appendChild(scriptText);
            
			document.querySelector("#vanila__js__page").innerHTML = "";
            document.querySelector("#vanila__js__page").appendChild(script);

            document.querySelector("#tags__js__page").innerHTML =
                integration.teachersHtml;
        }
    }, [Object.keys(integration).length]);

    const toggleTeacherModal = (index) => {
        setTeacherModalBool(!TeacherModalBool);
        setActiveTeacherItems(index);
    };

    if (TeacherModalBool === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }

    const handTeacherModalBool = (e) => {
        if (e.target === TeacherModalRef.current) {
            setTeacherModalBool(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Преподаватели - IOMP</title>
            </Helmet>
            <section className="teacher">
                <div className="container">
                    <div className="teacher-wrapper">
                        <h2 className={`title ${size} teacher__title`}>
                            Наши преподаватели
                        </h2>

                        <TeacherModal
                            rgb={rgb}
                            bgColor={bgColor}
                            state={TeacherModalBool}
                            onClick={toggleTeacherModal}
                            modalRef={TeacherModalRef}
                            {...itemsMain[activeTeacherItems]}
                        />

                        <div className="teacher-block-wrapper">
                            {isLoaded
                                ? Object.keys(itemsMain).map((key) => (
                                      <TeacherBlock
                                          key={`teacher-block-${itemsMain[key].id}`}
                                          size={size}
                                          onClick={() =>
                                              toggleTeacherModal(
                                                  itemsMain[key].id
                                              )
                                          }
                                          {...itemsMain[key]}
                                      />
                                  ))
                                : Array(4)
                                      .fill(0)
                                      .map((_, index) => (
                                          <div
                                              className="teacher-block"
                                              key={index}
                                          >
                                              <TeacherBlockLoading />
                                          </div>
                                      ))}
                        </div>
                    </div>
                </div>
            </section>

            <ShopSection style={{marginBottom: "50px"}} />
            <MagazineSection />
            <EmailFormWrapper />
        </>
    );
};

export default Teacher;
