import React from "react";
import {useDispatch, useSelector} from "react-redux";

import { FileInput, CabinetError } from ".././";

import {
    fetchEditUserAvatar,
    setMessageCabinetAvatar,
} from "../../redux/actions/cabinet";

const CabinetCartUser = React.memo(({avatar, first_name, last_name, email, size}) => {
    const dispatch = useDispatch();

    const {messageAvatar} = useSelector(({cabinet}) => cabinet);

    const submitFile = (file) => {
        dispatch(fetchEditUserAvatar(file));
    };

    const messageSubmitFile = (message) => {
        dispatch(setMessageCabinetAvatar(message));
    };

    const removeError = () => {
        dispatch(setMessageCabinetAvatar(""));
    };

    return (
        <>
            {messageAvatar ? (
                <CabinetError
                    message={messageAvatar}
                    removeError={removeError}
                />
            ) : (
                <></>
            )}
            <div className="cabinet-block-info">
                <div className="cabinet-block-info-thumb">
                    <FileInput
                        id="input-file"
                        submitFile={submitFile}
                        messageSubmitFile={messageSubmitFile}
                    />
                    <label htmlFor="input-file" className="input-file__label">
                        <div
                            className="cabinet-block-info-img"
                            style={{
                                backgroundImage: `url(${
                                    avatar !== "default"
                                        ? avatar
                                        : "https://imeninik.ru/api/public/storage/all/default_avatar.svg"
                                })`,
                            }}
                        ></div>

                        <div className="cabinet-block-info-svg">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 20 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 13.7113V5.07341C20 3.7031 18.8866 2.58972 17.5163 2.58972H14.5024L14.4617 2.41843C14.1313 0.995106 12.8793 0 11.4152 0H8.58483C7.12072 0 5.86868 0.995106 5.53834 2.41843L5.49755 2.58972H2.48369C1.11338 2.58972 0 3.7031 0 5.07341V13.7113C0 15.1427 1.16639 16.3091 2.59788 16.3091H17.394C18.8336 16.3132 20 15.1468 20 13.7113ZM18.6011 13.7113C18.6011 14.3719 18.0628 14.9103 17.4021 14.9103H2.60196C1.94127 14.9103 1.40294 14.3719 1.40294 13.7113V5.07341C1.40294 4.47798 1.88825 3.98858 2.48777 3.98858H6.05628C6.38254 3.98858 6.66395 3.76427 6.73736 3.44617L6.90457 2.73654C7.08809 1.94943 7.7814 1.39886 8.58891 1.39886H11.4193C12.2268 1.39886 12.9201 1.94943 13.1036 2.73654L13.2708 3.44617C13.3442 3.76427 13.6256 3.98858 13.9519 3.98858H17.5204C18.1158 3.98858 18.6052 4.4739 18.6052 5.07341V13.7113H18.6011Z"
                                    fill="white"
                                />
                                <path
                                    d="M10 5.15088C7.61827 5.15088 5.677 7.08807 5.677 9.47388C5.677 11.8556 7.6142 13.7969 10 13.7969C12.3817 13.7969 14.323 11.8597 14.323 9.47388C14.3189 7.09215 12.3817 5.15088 10 5.15088ZM10 12.3939C8.38907 12.3939 7.07586 11.0848 7.07586 9.4698C7.07586 7.85887 8.385 6.54566 10 6.54566C11.6109 6.54566 12.9241 7.85479 12.9241 9.4698C12.9201 11.0848 11.6109 12.3939 10 12.3939Z"
                                    fill="white"
                                />
                                <path
                                    d="M3.31976 5.15088H3.29529C2.90785 5.15088 2.5979 5.46491 2.5979 5.85235C2.5979 6.23979 2.91193 6.54974 3.29529 6.54974H3.31976C3.7072 6.54974 4.02123 6.23571 4.02123 5.85235C4.01715 5.46491 3.70312 5.15088 3.31976 5.15088Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </label>
                </div>
                <div className="cabinet-block-info-text">
                    <h3 className={`cabinet-block-info__title ${size}`}>
                        Здравствуйте, {`${first_name} ${last_name}`}!
                    </h3>
                    <p className={`cabinet-block-info__subtitle ${size}`}>
                        <span>Email:</span> {email}
                    </p>
                </div>
            </div>
        </>
    );
});

export default CabinetCartUser;
