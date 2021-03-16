import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    ShopPageMain1,
    ShopPageMain2,
    ShopPageSectionSquares,
    ShopPageSliderText,
    ShopPageCompositionProduct,
    ShopPageTeachers,
    ShopPageFeedbackPhotos,
    PreloaderPage,
    ShopPageFeedbackVideos,
    ShopPageGoods,
} from "../components/";

import {Er404} from "./";

import {fetchByUrlTimetable} from "../redux/actions/timetable";

const TimetableSubs = (props) => {
    const dispatch = useDispatch();

    const {byUrlItem, isLoaded} = useSelector(({timetable}) => timetable);
    const {size, type} = useSelector(({visually}) => visually);
    const url = props.match.params.url;

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchByUrlTimetable(url));
    }, [url]);

    React.useEffect(() => {
        if (Object.keys(byUrlItem).length) {
            const script = document.createElement("script");

            const scriptText = document.createTextNode(
                byUrlItem.timetablePageJs
            );

            script.appendChild(scriptText);

            document.querySelector("#vanila__js__page").innerHTML = "";
            document.querySelector("#vanila__js__page").appendChild(script);

            document.querySelector("#tags__js__page").innerHTML =
                byUrlItem.timetablePageHtml;
        }
    }, [byUrlItem.timetablePageJs, byUrlItem.timetablePageHtml]);

    return (
        <>
            {isLoaded ? (
                byUrlItem && Object.keys(byUrlItem).length ? (
                    <>
                        <Helmet>
                            <title>{byUrlItem.title} - IOMP</title>
                        </Helmet>

                        {byUrlItem.page.length ? (
                            byUrlItem.page.map((block, index) => (
                                <div key={`shop-page-block-${index}`}>
                                    {block.type === "main1" ? (
                                        <ShopPageMain1 size={size} {...block} />
                                    ) : null}
                                    {block.type === "main2" ? (
                                        <ShopPageMain2
                                            size={size}
                                            {...block}
                                            form_id_awo={byUrlItem.id_awo}
                                            action={byUrlItem.action}
                                            formId={byUrlItem.formId}
                                            formVc={byUrlItem.formVc}
                                            range={byUrlItem.range}
                                            minDate={byUrlItem.minDate}
                                            maxDate={byUrlItem.maxDate}
                                            date={byUrlItem.date}
                                        />
                                    ) : null}
                                    {block.type === "section-squares" ? (
                                        <ShopPageSectionSquares
                                            size={size}
                                            type={type}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "slider-text" ? (
                                        <ShopPageSliderText
                                            size={size}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "composition-product" ? (
                                        <ShopPageCompositionProduct
                                            size={size}
                                            {...block}
                                            form_id_awo={byUrlItem.id_awo}
                                            action={byUrlItem.action}
                                            formId={byUrlItem.formId}
                                            formVc={byUrlItem.formVc}
                                        />
                                    ) : null}
                                    {block.type === "teachers" ? (
                                        <ShopPageTeachers
                                            size={size}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "feedback-photos" ? (
                                        <ShopPageFeedbackPhotos
                                            size={size}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "feedback-videos" ? (
                                        <ShopPageFeedbackVideos
                                            size={size}
                                            {...block}
                                        />
                                    ) : null}
                                    {block.type === "goods" ? (
                                        <ShopPageGoods size={size} {...block} />
                                    ) : null}
                                </div>
                            ))
                        ) : (
                            <ShopPageMain2 size={size} {...byUrlItem} />
                        )}
                    </>
                ) : (
                    <Er404 />
                )
            ) : (
                <PreloaderPage />
            )}
        </>
    );
};

export default TimetableSubs;
