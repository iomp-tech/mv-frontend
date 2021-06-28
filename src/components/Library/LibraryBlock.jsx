import React from "react";

const LibraryBlock = ({training, image, color, DOMEN, awo_shop_domain, awo_shop_subdomain}) => {
    const url = `https://${awo_shop_domain}/personal/auth/login?lg=ru`;

    return (
        <a href={url} target="_blank" className="library-block">
            <div className="library-block-left">
                <div
                    className={`library-block-thumb`}
                    style={{
                        backgroundImage: `url(${
                            image !== ""
                                ? `https://${awo_shop_domain}/userdata/${awo_shop_subdomain}/training/${image}`
                                : `${DOMEN}/public/storage/all/default_avatar.svg`
                        })`,
                    }}
                ></div>
                <div className={`library-block-text`}>
                    <span
                        className={`library-block__subtitle`}
                        style={{color: color}}
                    >
                        Курс
                    </span>
                    <h3
                        className={`library-block__title`}
                        style={{color: color}}
                    >
                        {training}
                    </h3>
                </div>
            </div>
            <div className="library-block-right">
                <div className={`library-block__btn`}>
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 0C4.48566 0 0 4.48609 0 10C0 15.5139 4.48566 20 10 20C15.5143 20 20 15.5139 20 10C20 4.48609 15.5143 0 10 0ZM10 19.1667C4.94547 19.1667 0.83332 15.0545 0.83332 10C0.83332 4.94547 4.94547 0.83332 10 0.83332C15.0545 0.83332 19.1667 4.94547 19.1667 10C19.1667 15.0545 15.0545 19.1667 10 19.1667Z" />
                        <path d="M13.9754 9.64966L8.14211 5.89966C8.01434 5.81626 7.84914 5.81177 7.7173 5.88419C7.58301 5.95743 7.5 6.09743 7.5 6.25001V13.75C7.5 13.9026 7.58301 14.0426 7.7173 14.1158C7.77914 14.1496 7.84832 14.1667 7.91668 14.1667C7.9948 14.1667 8.07375 14.1447 8.14211 14.1004L13.9754 10.3504C14.0943 10.2739 14.1667 10.1416 14.1667 10C14.1667 9.85841 14.0943 9.72618 13.9754 9.64966ZM8.33332 12.9867V7.01337L12.9793 10L8.33332 12.9867Z" />
                    </svg>
                    <span>Перейти к обучению</span>
                </div>
            </div>
        </a>
    );
};

export default LibraryBlock;
