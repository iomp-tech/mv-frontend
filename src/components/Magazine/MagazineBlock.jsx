import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";

const MagazineBlock = React.memo(
	({
		id,
        title,
        smallDescription,
        thumb,
        date,
        categories,
        num,
        auths,
        auth,
        postsType,
    }) => {
        return (
            <>
                <Link
                    to={`/post/${id}`}
                    className={
                        num === 0 ? "magazine-block_big" : "magazine-block"
                    }
                >
                    <div
                        className={
                            num === 0
                                ? "magazine-block_big-top"
                                : "magazine-block-top"
                        }
                    >
                        <div
                            className={
                                num === 0
                                    ? "magazine-block_big-thumb"
                                    : "magazine-block-thumb"
                            }
                        >
                            <div
                                className={
                                    num === 0
                                        ? "magazine-block_big-img"
                                        : "magazine-block-img"
                                }
                                style={{
                                    backgroundImage: `url(${thumb})`,
                                }}
                            ></div>
                            <div
                                className={
                                    num === 0
                                        ? "magazine-block_big-types"
                                        : "magazine-block-types"
                                }
                            >
                                <div
                                    className={
                                        num === 0
                                            ? "magazine-block_big-types-left"
                                            : "magazine-block-types-left"
                                    }
                                >
                                    <span
                                        className={
                                            num === 0
                                                ? "magazine-block_big__types_color"
                                                : "magazine-block__types_color"
                                        }
                                    >
                                        {categories && categories.title}
                                    </span>
                                </div>
                                <div
                                    className={
                                        num === 0
                                            ? "magazine-block_big-types-right"
                                            : "magazine-block-types-right"
                                    }
                                >
                                    <span
                                        className={
                                            num === 0
                                                ? "magazine-block_big__types_gray"
                                                : "magazine-block__types_gray"
                                        }
                                    >
                                        {postsType && postsType.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span
                            className={
                                num === 0
                                    ? "magazine-block_big__date"
                                    : "magazine-block__date"
                            }
                        >
                            {moment(date, "DD.MM.YYYY HH:mm")
                                .locale("ru")
                                .format("DD MMMM, HH:mm")}
                        </span>
                        <h4
                            className={
                                num === 0
                                    ? "magazine-block_big__title"
                                    : "magazine-block__title"
                            }
                        >
                            {title}
                        </h4>
                        <p
                            className={
                                num === 0
                                    ? "magazine-block_big__description"
                                    : "magazine-block__description"
                            }
                        >
                            {smallDescription}
                        </p>
                    </div>

                    <div
                        className={
                            num === 0
                                ? "magazine-block_big-bottom"
                                : "magazine-block-bottom"
                        }
                    >
                        <div className="magazine-block-auth-wrapper">
                            {Object.keys(auths).length &&
                                auth.map((key) => (
                                    <div
                                        key={`auth-${auths[key].id}`}
                                        className={`auth ${
                                            num === 0
                                                ? "magazine-block_big-auth"
                                                : "magazine-block-auth"
                                        }`}
                                    >
                                        <div
                                            style={{
                                                backgroundImage: `url(${auths[key].avatar})`,
                                            }}
                                            className={`auth__img ${
                                                num === 0
                                                    ? "magazine-block_big-auth__img"
                                                    : "magazine-block-auth__img"
                                            }`}
                                        ></div>
                                        <span
                                            className={`auth__name ${
                                                num === 0
                                                    ? "magazine-block_big-auth__name"
                                                    : "magazine-block-auth__name"
                                            }`}
                                        >
                                            {auths[key].name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </Link>
            </>
        );
    }
);

export default MagazineBlock;
