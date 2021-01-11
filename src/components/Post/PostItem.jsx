import React from "react";
import moment from "moment";
import "moment/locale/ru";

const PostItem = React.memo(
    ({
        date,
        title,
        smallDescription,
        thumb,
        block,
        auths,
        auth,
        categories,
        postsType,
    }) => {
        return (
            <div className="post-wrapper">
                <div className="post-cover">
                    <div className="post-cover-text">
                        <div className="post-cover-block-top">
                            <div className="post-cover-types">
                                <span className="post-cover__type_color">
                                    {categories && categories.title}
                                </span>
                                <span className="post-cover__type_gray">
                                    {postsType && postsType.title}
                                </span>
                            </div>
                            <span className="post-cover__date">
                                {moment(date, "DD.MM.YYYY HH:mm")
                                    .locale("ru")
                                    .format("DD MMMM, HH:mm")}
                            </span>
                        </div>
                        <h2 className="post-cover__title">{title}</h2>
                        <p className="post-cover__description">
                            {smallDescription}
                        </p>
                        <div className="post-cover-auth-wrapper">
                            {Object.keys(auths).length &&
                                auth &&
                                auth.map((key) => (
                                    <div
                                        className="auth post-cover-auth"
                                        key={`auht-post-${auths[key].id}`}
                                    >
                                        <div
                                            style={{
                                                backgroundImage: `url(${auths[key].avatar})`,
                                            }}
                                            className="auth__img post-cover-auth__img"
                                        ></div>
                                        <span className="auth__name post-cover-auth__name">
                                            {auths[key].name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div
                        className="post-cover-thumb"
                        style={{
                            backgroundImage: `url(${thumb})`,
                        }}
                    ></div>
                </div>

                {block &&
                    block.map((obj, index) => (
                        <div
                            className="post-block"
                            key={`${obj.title}_${index}`}
                        >
                            <h3 className="post-block__title">{obj.title}</h3>
                            <div
                                className="post-block__description"
                                dangerouslySetInnerHTML={{__html: obj.body}}
                            ></div>

                            <div
                                className="post-block-thumb"
                                style={{
                                    backgroundImage: `url(${obj.thumbBlock})`,
                                }}
                            ></div>
                        </div>
                    ))}
            </div>
        );
    }
);

export default PostItem;
