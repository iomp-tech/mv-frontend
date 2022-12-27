import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const LibraryNull = () => {
    return (
        <div className="library-null">
            <p className={`library-null__title`}>
                К сожалению у вас нет курсов
            </p>
        </div>
    );
};

export default LibraryNull;
