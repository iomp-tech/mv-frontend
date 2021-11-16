import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    ShopPageMain1,
    ShopPageMain1Image,
    ShopPageMain2,
    ShopPageMain2Image,
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

import {fetchByUrlGoods} from "../redux/actions/goods";

const ShopPage = (props) => {
    const dispatch = useDispatch();

    const {byUrlItem, isLoaded} = useSelector(({goods}) => goods);
    const url = props.match.params.url;

    const [to, setTo] = React.useState("");

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchByUrlGoods(url));

        if (Object.keys(byUrlItem).length) {
            for (let i = 0; i < byUrlItem.page.length; i++) {
                if (byUrlItem.page[i].type === "composition-product") {
                    setTo("shop-page-composition-product");

                    break;
                } else if (byUrlItem.page[i].type === "main2") {
                    setTo("shop-page-main2");

                    break;
                } else if (byUrlItem.page[i].type === "main2-image") {
                    setTo("shop-page-main2-image");

                    break;
                } else if (byUrlItem.page[i].type === "main1") {
                    setTo("shop-page-main1");

                    break;
                } else if (byUrlItem.page[i].type === "main1-image") {
                    setTo("shop-page-main1-image");

                    break;
                }
            }
        }
    }, [url, Object.keys(byUrlItem).length]);

    React.useEffect(() => {
        if (Object.keys(byUrlItem).length) {
            // Top
            const scriptTop = document.createElement("script");
            const scriptTextTop = document.createTextNode(
                byUrlItem.shopPageTopJs
            );
            scriptTop.appendChild(scriptTextTop);

            document.querySelector("#vanila__js__page__top").innerHTML = "";
            document
                .querySelector("#vanila__js__page__top")
                .appendChild(scriptTop);

            document.querySelector("#tags__js__page__top").innerHTML =
                byUrlItem.shopPageTopHtml;

            // Bottom
            const scriptBottom = document.createElement("script");
            const scriptTextBottom = document.createTextNode(
                byUrlItem.shopPageBottomJs
            );
            scriptBottom.appendChild(scriptTextBottom);

            document.querySelector("#vanila__js__page__bottom").innerHTML = "";
            document
                .querySelector("#vanila__js__page__bottom")
                .appendChild(scriptBottom);

            document.querySelector("#tags__js__page__bottom").innerHTML =
                byUrlItem.shopPageBottomHtml;
        }
    }, [
        byUrlItem.shopPageTopJs,
        byUrlItem.shopPageTopHtml,
        byUrlItem.shopPageBottomJs,
        byUrlItem.shopPageBottomHtml,
    ]);

    return (
        <>
            {isLoaded ? (
                byUrlItem && Object.keys(byUrlItem).length ? (
                    <>
                        <Helmet>
                            <title>{byUrlItem.title} - MasterVision</title>
                        </Helmet>

                        {byUrlItem.page.map((block, index) => (
                            <div key={`shop-page-block-${index}`}>
                                {block.type === "main1" ? (
                                    <ShopPageMain1 to={to} {...block} />
                                ) : null}
                                {block.type === "main1-image" ? (
                                    <ShopPageMain1Image to={to} {...block} />
                                ) : null}
                                {block.type === "main2" ? (
                                    <ShopPageMain2
                                        {...block}
                                        id_awo={block.main2_id_awo}
                                    />
                                ) : null}
                                {block.type === "main2-image" ? (
                                    <ShopPageMain2Image
                                        {...block}
                                        id_awo={block.main2_id_awo}
                                    />
                                ) : null}
                                {block.type === "section-squares" ? (
                                    <ShopPageSectionSquares {...block} />
                                ) : null}
                                {block.type === "slider-text" ? (
                                    <ShopPageSliderText
                                        to={to}
                                        blockIndex={index}
                                        {...block}
                                    />
                                ) : null}
                                {block.type === "composition-product" ? (
                                    <ShopPageCompositionProduct
                                        blockIndex={index}
                                        {...block}
                                        id_awo={block.form_id_awo}
                                    />
                                ) : null}
                                {block.type === "teachers" ? (
                                    <ShopPageTeachers {...block} />
                                ) : null}
                                {block.type === "feedback-photos" ? (
                                    <ShopPageFeedbackPhotos {...block} />
                                ) : null}
                                {block.type === "feedback-videos" ? (
                                    <ShopPageFeedbackVideos {...block} />
                                ) : null}
                                {block.type === "goods" ? (
                                    <ShopPageGoods {...block} />
                                ) : null}
                            </div>
                        ))}
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

export default ShopPage;
