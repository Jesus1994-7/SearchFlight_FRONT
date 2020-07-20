

class utils {

    isNullOrEmpty(variable){
        return (variable == null || variable ==="" || variable === " ");
    }
    systemSecretQuestions() {
        return [
            {"questionSecret":"Nombre de tu primera mascota"},
            {"questionSecret":"Modelo de tu primer coche"},
            {"questionSecret":"Nombre de tu colegio"}
        ];
    }
}

export default utils;