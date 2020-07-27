
export const utils = {
    isNullOrEmpty,
    systemSecretQuestions,
    DateToSQLFormat
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

function DateToSQLFormat(date){
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
