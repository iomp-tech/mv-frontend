import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchEvents} from "../.././redux/actions/events";
import {fetchTeacher} from "../.././redux/actions/teacher";

import EventSlider from "./EventSlider";

const EvenrSection = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useSelector(({events}) => events);
    const {timetableType} = useSelector(({timetable}) => timetable);
    const categories = useSelector(({categories}) => categories.items);
    const teachers = useSelector(({teacher}) => teacher.items);

    React.useEffect(() => {
        if (!Object.keys(teachers).length) {
            dispatch(fetchTeacher());
        }

        dispatch(fetchEvents());
    }, []);

    return (
        <section className="event">
            <div className="container">
                <div className="event-wrapper">
                    <h2 className="title event__title">
                        Ближайшие мероприятия
                    </h2>

                    <EventSlider
                        items={items}
                        auths={teachers}
                        eventsType={timetableType}
                        categories={categories}
                        isLoaded={isLoaded}
                    />
                </div>
            </div>
        </section>
    );
};

export default EvenrSection;
