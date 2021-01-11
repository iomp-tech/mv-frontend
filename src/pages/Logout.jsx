import React from "react";

import {PreloaderPage} from ".././components";

const Logout = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);

        localStorage.removeItem("success-token");

        window.location.href = "/";
    }, []);

    return <PreloaderPage />;
};

export default Logout;
