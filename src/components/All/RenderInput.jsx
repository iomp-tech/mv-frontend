import React from "react";

const RenderInput = React.memo(
    ({
		input,
        label,
        type,
        meta: {touched, error},
        statePassowrd,
        typeConst,
        func,
        keyInput,
    }) => {
        const funcSetStatePassword = () => {
            const statepass = {
                ...statePassowrd,
            };

            statepass[keyInput] = !statePassowrd[keyInput];

            func(statepass);
        };

        return (
            <>
                <div style={{position: "relative"}}>
                    <input
                        {...input}
                        type={type}
                        className={`input__field reglog-input__field ${
                            touched && error ? "input__field__error" : ""
                        }`}
                        required
                    />
                    <label
                        className={`input__label reglog-input__label ${
                            touched && error ? "input__label__error" : ""
                        }`}
                    >
                        {label}
                    </label>
                    {typeConst === "password" ? (
                        <div
                            onClick={funcSetStatePassword}
                            className="input-eye"
                        >
                            {statePassowrd[keyInput] ? (
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 4.09082C8.49545 4.09082 7.27274 5.31353 7.27274 6.81809C7.27274 8.32265 8.49545 9.54536 10 9.54536C11.5046 9.54536 12.7273 8.32265 12.7273 6.81809C12.7273 5.31353 11.5045 4.09082 10 4.09082Z"
                                        fill="#CECECE"
                                    />
                                    <path
                                        d="M10 0C5.45454 0 1.57274 2.82724 0 6.81817C1.57274 10.8091 5.45454 13.6363 10 13.6363C14.55 13.6363 18.4273 10.8091 20 6.81817C18.4273 2.82724 14.55 0 10 0ZM10 11.3636C7.49091 11.3636 5.45454 9.32722 5.45454 6.81813C5.45454 4.30904 7.49091 2.27271 10 2.27271C12.5091 2.27271 14.5455 4.30908 14.5455 6.81817C14.5455 9.32726 12.5091 11.3636 10 11.3636Z"
                                        fill="#CECECE"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.84775 5.467L12.7107 8.32998L12.7244 8.18002C12.7244 6.6758 11.5019 5.45337 9.99771 5.45337L9.84775 5.467Z"
                                        fill="#CECECE"
                                    />
                                    <path
                                        d="M9.99772 3.63547C12.5062 3.63547 14.5422 5.67138 14.5422 8.1799C14.5422 8.76613 14.424 9.32509 14.2195 9.8386L16.878 12.4971C18.2504 11.3519 19.332 9.87042 20 8.1799C18.4231 4.18992 14.5467 1.36328 9.99777 1.36328C8.72532 1.36328 7.50744 1.59049 6.37589 1.99948L8.33907 3.95811C8.85253 3.75817 9.4115 3.63547 9.99772 3.63547Z"
                                        fill="#CECECE"
                                    />
                                    <path
                                        d="M0.908868 1.15883L2.98112 3.23108L3.39468 3.64463C1.89502 4.81709 0.708928 6.37584 0 8.17994C1.57238 12.1699 5.45329 14.9966 9.99772 14.9966C11.4065 14.9966 12.7516 14.7239 13.9832 14.2285L14.3695 14.6148L17.0189 17.2688L18.1777 16.1145L2.06769 0L0.908868 1.15883ZM5.93502 6.18041L7.33924 7.58464C7.29834 7.78006 7.27107 7.97544 7.27107 8.17994C7.27107 9.68416 8.49351 10.9066 9.99772 10.9066C10.2022 10.9066 10.3976 10.8793 10.5885 10.8384L11.9927 12.2426C11.3883 12.5426 10.7158 12.7244 9.99772 12.7244C7.48921 12.7244 5.45329 10.6885 5.45329 8.17994C5.45329 7.46194 5.63509 6.78935 5.93502 6.18041Z"
                                        fill="#CECECE"
                                    />
                                </svg>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                {touched && error && (
                    <div>
                        <span className={`input__label__error_bottom`}>
                            {error}
                        </span>
                    </div>
                )}
            </>
        );
    }
);

export default RenderInput;
