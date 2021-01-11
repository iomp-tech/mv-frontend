import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {MagazineBlock} from ".././";

import {setPostsFilters} from "../.././redux/actions/posts";

const MagazineCatalogBlock = React.memo(({title, keyId}) => {
    const dispatch = useDispatch();
	const itemsClear = [];
	
	const {isLoadedLimit, items, postsType, filters} = useSelector(({posts}) => posts);
    const categories = useSelector(({categories}) => categories.items);
    const teachers = useSelector(({teacher}) => teacher.items);

    for (let key in items) {
        if (items[key].type === keyId) {
            itemsClear.push(items[key]);
        }
    }

    const windowAndSetType = () => {
        window.scrollTo(0, 0);
        filters.type = keyId;

        dispatch(setPostsFilters(filters));
    };

    return (
        <>
            {itemsClear.length ? (
                <div
                    className="magazine-catalog-item-wrapper"
                    style={{opacity: isLoadedLimit ? "" : "0.3"}}
                >
                    <div className="magazine-catalog-top">
                        <div className="magazine-catalog-top-left">
                            <h4 className="magazine-catalog__title">{title}</h4>
                        </div>
                        <div className="magazine-catalog-top-right">
                            <p className="magazine-catalog__number">
                                Всего: <span>{itemsClear.length}</span>
                            </p>
                        </div>
                    </div>
                    <div className="magazine-catalog-middle">
                        {itemsClear &&
                            itemsClear
                                .slice(0, 3)
                                .map((obj, num) => (
                                    <MagazineBlock
                                        key={obj.id}
                                        num={num}
                                        auths={teachers}
                                        postsType={postsType[obj.type]}
                                        categories={categories[obj.category]}
                                        {...obj}
                                    />
                                ))}
                    </div>
                    <div className="magazine-catalog-bottom">
                        <button
                            onClick={windowAndSetType}
                            className="btn-bold_gray magazine-catalog__btn"
                        >
                            Загрузить еще
                        </button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
});

export default MagazineCatalogBlock;
