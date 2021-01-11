import React from "react";

const FileInput = ({id, submitFile, messageSubmitFile}) => {
    const handleSubmit = (event) => {
        const type = event.target.files[0].type;
        const size = event.target.files[0].size;

        if (type === "image/jpeg" || type === "image/png") {
            if (size < 2000000) {
                submitFile(event.target.files[0]);
            } else {
                messageSubmitFile(
                    "Ваше изображение слишком большое. Максимальный вес 2мб"
                );
            }
        } else {
            messageSubmitFile(
                "Ваше изображение неверного расширения. Доступные расширения: .jpg, .jpeg, .png"
            );
        }
    };

    return (
        <input
            className="input-file"
            id={id}
            type="file"
            onChange={handleSubmit}
            multiple={false}
            accept=".jpg, .jpeg, .png"
        />
    );
};

export default FileInput;
