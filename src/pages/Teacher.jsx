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

    const toggleTeacherModal = (index) => {
        setTeacherModalBool(!TeacherModalBool);
        setActiveTeacherItems(index);
    };

    const findTeacherActiveItem = itemsMain.find(
        (item) => item.id === activeTeacherItems
    );

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
                            {...findTeacherActiveItem}
                        />

                        <div className="teacher-block-wrapper">
                            {isLoaded
                                ? itemsMain.map((obj, index) => (
                                      <TeacherBlock
                                          key={`teacher-block-${obj.id}`}
                                          size={size}
                                          onClick={() =>
                                              toggleTeacherModal(obj.id)
                                          }
                                          {...obj}
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
