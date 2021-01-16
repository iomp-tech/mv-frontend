import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import {Lightbox} from "react-modal-image";

import {InstituteItem, PreloaderPage} from ".././components";

import {fetchInstitute} from ".././redux/actions/institute";

const Institute = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useSelector(({institute}) => institute);

    const [itemContent, setItemContent] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const refDoc = React.useRef();

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchInstitute());
    }, []);

    const toggleItemContent = (content) => {
        setItemContent(content);
    };

    const toggleOpen = () => {
        setOpen(!open);
    };

    const toScrollDoc = () => {
        refDoc.current.scrollIntoView();
    };

    return (
        <>
            <Helmet>
                <title>Сведения об образовательной организации - IOMP</title>
            </Helmet>
            {isLoaded ? (
                <section className="institute">
                    <div className="container">
                        <div className="institute-wrapper">
                            <h2 className="title institute__title">
                                Сведения об образовательной организации
                            </h2>

                            <div className="institute-content">
                                <div className="institute-text">
                                    {items.map((arr, index) => (
                                        <InstituteItem
                                            toggleItemContent={
                                                toggleItemContent
                                            }
                                            toScrollDoc={toScrollDoc}
                                            key={`institute-items-${index}`}
                                            {...arr}
                                        />
                                    ))}
                                </div>
                                <div
                                    className="institute-doc"
                                    onClick={toggleOpen}
                                    ref={refDoc}
                                >
                                    {itemContent.file ? (
                                        <>
                                            {itemContent.file.indexOf(
                                                ".jpg"
                                            ) !== -1 ||
                                            itemContent.file.indexOf(
                                                ".jpeg"
                                            ) !== -1 ||
                                            itemContent.file.indexOf(".png") !==
                                                -1 ? (
                                                <>
                                                    <div
                                                        className="institute-doc-img"
                                                        style={{
                                                            backgroundImage: `url(${itemContent.file})`,
                                                        }}
                                                    ></div>

                                                    {open && (
                                                        <Lightbox
                                                            medium={
                                                                itemContent.file
                                                            }
                                                            large={
                                                                itemContent.file
                                                            }
                                                            onClose={toggleOpen}
                                                            hideDownload={true}
                                                        />
                                                    )}
                                                </>
                                            ) : (
                                                <iframe
                                                    className="institute-iframe"
                                                    src={itemContent.file}
                                                    frameborder="0"
                                                >
                                                    Ваш браузер не поддерживает
                                                    фреймы
                                                </iframe>
                                            )}
                                        </>
                                    ) : (
                                        <p
                                            className="institute-iframe-text"
                                            ref={refDoc}
                                            dangerouslySetInnerHTML={{
                                                __html: itemContent.text,
                                            }}
                                        ></p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default Institute;
