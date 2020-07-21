
export const utils = {
    isNullOrEmpty,
    systemSecretQuestions
};

function isNullOrEmpty(variable) {
    return (variable == null || variable === "" || variable === " ");
};

function systemSecretQuestions() {
    return [
        { "questionSecret": "Nombre de tu primera mascota" },
        { "questionSecret": "Modelo de tu primer coche" },
        { "questionSecret": "Nombre de tu colegio" }
    ];
};
