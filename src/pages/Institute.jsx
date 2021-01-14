import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Lightbox} from "react-modal-image";

import {InstituteItem, PreloaderPage} from ".././components";

import {fetchInstitute} from ".././redux/actions/institute";

const Institute = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useSelector(({institute}) => institute);

    const [itemContent, setItemContent] = React.useState([]);
    const [open, setOpen] = React.useState(false);

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

    return (
        <>
            {isLoaded ? (
                <section class="institute">
                    <div class="container">
                        <div class="institute-wrapper">
                            <h2 class="title institute__title">
                                Об образовательном учреждении
                            </h2>

                            <div class="institute-content">
                                <div className="institute-text">
                                    {items.map((arr, index) => (
                                        <InstituteItem
                                            toggleItemContent={
                                                toggleItemContent
                                            }
                                            key={`institute-items-${index}`}
                                            {...arr}
                                        />
                                    ))}
                                </div>
                                <div
                                    className="institute-doc"
                                    onClick={toggleOpen}
                                >
                                    {itemContent.indexOf(".jpg") !== -1 ||
                                    itemContent.indexOf(".jpeg") !== -1 ||
                                    itemContent.indexOf(".png") !== -1 ? (
                                        <>
                                            <div
                                                className="institute-doc-img"
                                                style={{
                                                    backgroundImage: `url(${itemContent})`,
                                                }}
                                            ></div>

                                            {open && (
                                                <Lightbox
                                                    medium={itemContent}
                                                    large={itemContent}
                                                    onClose={toggleOpen}
                                                    hideDownload={true}
                                                />
                                            )}
                                        </>
                                    ) : (
                                        <iframe
                                            className="institute-iframe"
                                            src={itemContent}
                                            frameborder="0"
                                        >
                                            Ваш браузер не поддерживает фреймы
                                        </iframe>
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
