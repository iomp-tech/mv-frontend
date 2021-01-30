import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchTeacherMain} from "../.././redux/actions/teacher";

import TeacherBlock from "./TeacherBlock";
import TeacherModal from "./TeacherModal";
import TeacherBlockLoading from "./TeacherBlockLoading";

const TeacherSection = () => {
    const dispatch = useDispatch();

    const teacherItems = useSelector(({teacher}) => teacher.itemsMain);
    const isLoaded = useSelector(({teacher}) => teacher.isLoaded);
    const {size} = useSelector(({visually}) => visually);

    const [TeacherModalBool, setTeacherModalBool] = React.useState(false);
    const [activeTeacherItems, setActiveTeacherItems] = React.useState();

    const TeacherModalRef = React.useRef();

    const toggleTeacherModal = (index) => {
        setTeacherModalBool(!TeacherModalBool);
        setActiveTeacherItems(index);
    };

    const findTeacherActiveItem = teacherItems.find(
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

    React.useEffect(() => {
        dispatch(fetchTeacherMain(4));
        document.body.addEventListener("click", handTeacherModalBool);
    }, []);

    return (
        <section className="teacher" style={{marginBottom: "50px"}}>
            <div className="container">
                <div className="teacher-wrapper">
                    <h2 className={`title ${size} teacher__title`}>
                        Наши преподаватели
                    </h2>

                    <TeacherModal
                        state={TeacherModalBool}
                        onClick={toggleTeacherModal}
                        modalRef={TeacherModalRef}
                        {...findTeacherActiveItem}
                    />

                    <div className="teacher-block-wrapper">
                        {isLoaded
                            ? teacherItems.map((obj) => (
                                  <TeacherBlock
                                      key={`teacher-block-${obj.id}`}
                                      size={size}
                                      onClick={() => toggleTeacherModal(obj.id)}
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

                    <div className="teacher-btn-wrapper">
                        <Link
                            to="/teachers"
                            className={`btn-bold_gray teacher__btn ${size}`}
                        >
                            Покащать еще
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeacherSection;
