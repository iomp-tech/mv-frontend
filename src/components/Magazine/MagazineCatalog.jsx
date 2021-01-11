import React from "react";
import {useDispatch, useSelector} from "react-redux";

import MagazineCatalogBlock from "./MagazineCatalogBlock";
import NoSearch from "../All/NoSearch";

const MagazineCatalog = React.memo(() => {
    const dispatch = useDispatch();

    const {items, postsType} = useSelector(({posts}) => posts);

    return (
        <>
            {Object.keys(items).length ? (
                <>
                    {Object.keys(postsType).map((obj) => (
                        <MagazineCatalogBlock
                            key={`${postsType[obj].title}_${postsType[obj].id}`}
                            keyId={postsType[obj].key}
                            {...postsType[obj]}
                        />
                    ))}
                </>
            ) : (
                <NoSearch style={{marginTop: "0px", marginBottom: "100px"}} />
            )}
        </>
    );
});

export default MagazineCatalog;
