import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchGoods} from "../.././redux/actions/goods";

import CategoriesItem from "./CategoriesItem";
import CategoriesItemLoading from "./CategoriesItemLoading";

const Categories = React.memo(() => {
    const dispatch = useDispatch();

    const goods = useSelector(({goods}) => goods.items);
    const {items, isLoaded} = useSelector(({categories}) => categories);

    const [activeThumb, setActiveThumb] = React.useState("");

    React.useEffect(() => {
        dispatch(fetchGoods());
    }, []);

    const onSelectItem = React.useCallback(
        (key) => {
            setActiveThumb(items[key].thumb);
        },
        [items, setActiveThumb]
    );

    //склонение ["курс", "курса", "курсов"]
    const checkDeclension = (num, title) => {
        let result;

        if (num % 100 >= 5 && num % 100 <= 20) {
            result = num + " " + title["2"];
        } else {
            if (num % 10 == 1) {
                result = num + " " + title[0];
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                result = num + " " + title[1];
            } else {
                result = num + " " + title[2];
            }
        }

        return result;
    };

    return (
        <section className="categories">
            <div className="container">
                <div className="categories-wrapper">
                    <h2 className="title categories__title">Образовательные программы</h2>

                    <div className="categories-content">
                        <div className="categories-item-wrapper">
                            {isLoaded
                                ? Object.keys(items).map((key) => (
                                      <CategoriesItem
                                          key={`${items[key].key}_${items[key].id}`}
                                          onMouseEnter={onSelectItem}
                                          keyId={items[key].key}
                                          checkDeclension={
                                              Object.keys(goods).length
                                                  ? checkDeclension(
                                                        Object.keys(
                                                            goods
                                                        ).filter(
                                                            (keyGoods) =>
                                                                goods[keyGoods]
                                                                    .category ===
                                                                items[key].key
                                                        ).length,
                                                        [
                                                            "курс",
                                                            "курса",
                                                            "курсов",
                                                        ]
                                                    )
                                                  : ""
                                          }
                                          {...items[key]}
                                      />
                                  ))
                                : Array(2)
                                      .fill(0)
                                      .map((_, index) => (
                                          <div
                                              className="categories-item"
                                              key={`categories-item-${index}`}
                                          >
                                              <CategoriesItemLoading />
                                          </div>
                                      ))}
                        </div>
                        <div
                            className="categories-thumb"
                            style={{
                                backgroundImage: `url(${activeThumb})`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Categories;
