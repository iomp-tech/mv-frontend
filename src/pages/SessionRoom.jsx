import React from "react";

import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {fetchUserCourse} from ".././redux/actions/user";
import {
    fetchSessionRoomCourses,
    setOpenSessionRoomCourses,
    createSessionRoom,
} from ".././redux/actions/session_room";

import {
    PreloaderPage,
    NoConfirmed,
    SessionRoomForm,
    SessionRoomNull,
    SessionRoomLinkBlock,
    SessionRoomErrorBlock,
} from ".././components/";

const SessionRoom = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {course, isLoadedCourse, isLogin, user} = useSelector(
        ({user}) => user
    );
    const itemCourseOpenSession = useSelector(
        ({session_room}) => session_room.items
    );
    const isLoadedCourseOpenSession = useSelector(
        ({session_room}) => session_room.isLoaded
    );
    const {isOpen, error, errorOpacity, urlUser} = useSelector(
        ({session_room}) => session_room
    );

    const {size, rgb} = useSelector(({visually}) => visually);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(course).length) {
            dispatch(fetchUserCourse());
        }

        if (!itemCourseOpenSession.length) {
            dispatch(fetchSessionRoomCourses());
        }
    }, []);

    const onSubmit = (formData) => {
        dispatch(createSessionRoom(formData));
    };

    React.useEffect(() => {
        if (itemCourseOpenSession.length && Object.keys(course).length) {
            Object.keys(course).map((idAllAwo) => {
                itemCourseOpenSession.map((idMyAwo) => {
                    if (course[idAllAwo].id_training === idMyAwo) {
                        dispatch(setOpenSessionRoomCourses(true));
                    }
                });
            });
        }
    }, [itemCourseOpenSession.length, Object.keys(course).length]);

    return (
        <>
            <Helmet>
                <title>Сессионная комната - IOMP</title>
            </Helmet>

            {isLoadedCourse && isLoadedCourseOpenSession ? (
                isLogin ? (
                    <>
                        {user.confirmed ? (
                            <section className="session-room">
                                <div className="container">
                                    <div className="session-room-wrapper">
                                        <h2
                                            className={`title ${size} session-room__title`}
                                        >
                                            Сессионная комната
                                        </h2>

                                        {isOpen ? (
                                            <>
                                                <SessionRoomForm
                                                    onSubmit={onSubmit}
                                                />

                                                {urlUser.length ? (
                                                    <SessionRoomLinkBlock
                                                        size={size}
                                                        rgb={rgb}
                                                        urlUser={urlUser}
                                                    />
                                                ) : null}

                                                {error.length ? (
                                                    <SessionRoomErrorBlock
                                                        size={size}
                                                        rgb={rgb}
                                                        error={error}
                                                        errorOpacity={
                                                            errorOpacity
                                                        }
                                                    />
                                                ) : null}
                                            </>
                                        ) : (
                                            <SessionRoomNull />
                                        )}
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <NoConfirmed />
                        )}
                    </>
                ) : (
                    history.push("/login")
                )
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default SessionRoom;
