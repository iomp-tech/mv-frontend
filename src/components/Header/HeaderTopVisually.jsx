import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setVisually, setSizeVisually} from "../.././redux/actions/visually";

const HeaderTopVisually = ({stateVisually, refVisually}) => {
    const disaptch = useDispatch();

    const {rgb, bgColor} = useSelector(({visually}) => visually);

    const onClickButtonTypeVisually = (type) => {
        disaptch(setVisually(type));
    };

    const onClickButtonSizeVisually = (size) => {
        disaptch(setSizeVisually(size));
    };

    return (
        <div
            className="visually-modal"
            style={{
                opacity: stateVisually ? 1 : 0,
                top: stateVisually ? "40px" : "35px",
                zIndex: stateVisually ? 5 : -1,
                backgroundColor: bgColor,
                boxShadow: `0 0 25px rgba(${rgb}, 0.1)`,
            }}
            ref={refVisually}
        >
            <div className="visually-block">
                <h3 className="visually__title">Контрастность</h3>
                <div className="visually-block-button">
                    <button
                        className="visually-block__button black-white"
                        onClick={() => onClickButtonTypeVisually("blackWhite")}
                    >
                        Черный на белом
                    </button>
                    <button
                        className="visually-block__button white-black"
                        onClick={() => onClickButtonTypeVisually("whiteBlack")}
                    >
                        Белый на черном
                    </button>
                    <button
                        className="visually-block__button dark-blue-aqua"
                        onClick={() =>
                            onClickButtonTypeVisually("darkBlueAqua")
                        }
                    >
                        Темно-синий на голубом
                    </button>
                </div>
            </div>
            <div className="visually-block">
                <h3 className="visually__title">Размер шрифта</h3>
                <div className="visually-block-button">
                    <button
                        className="visually-block__button black-white"
                        onClick={() => onClickButtonSizeVisually("X1")}
                    >
                        Стандарт
                    </button>
                    <button
                        className="visually-block__button black-white"
                        onClick={() => onClickButtonSizeVisually("X1-5")}
                    >
                        В 1.5 раза больше
                    </button>
                    <button
                        className="visually-block__button black-white"
                        onClick={() => onClickButtonSizeVisually("X2")}
                    >
                        В 2 раза больше
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopVisually;
