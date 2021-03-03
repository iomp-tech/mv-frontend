import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchTeacherMain} from "../../../redux/actions/teacher";

import {
    TeacherBlock,
    TeacherModal,
    TeacherBlockLoading,
} from "../../../components/";

const ShopPageTeachers = ({auth, size}) => {
    const dispatch = useDispatch();

    const {rgb, bgColor} = useSelector(({visually}) => visually);
    const {itemsMain, isLoaded} = useSelector(({teacher}) => teacher);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(itemsMain).length) {
            dispatch(fetchTeacherMain());
        }

        document.body.addEventListener("click", handTeacherModalBool);
    }, []);

    const [TeacherModalBool, setTeacherModalBool] = React.useState(false);
    const [activeTeacherItems, setActiveTeacherItems] = React.useState();

    const TeacherModalRef = React.useRef();

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
                            ? auth.map(
                                  (obj) =>
                                      itemsMain[obj] && (
                                          <TeacherBlock
                                              key={`teacher-block-${itemsMain[obj].id}`}
                                              size={size}
                                              onClick={() =>
                                                  toggleTeacherModal(
                                                      itemsMain[obj].id
                                                  )
                                              }
                                              {...itemsMain[obj]}
                                          />
                                      )
                              )
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
    );
};

export default ShopPageTeachers;
