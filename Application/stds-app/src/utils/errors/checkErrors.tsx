import {ErrorFormat} from "./ErrorUtils";


const checkTemp = (temp1: number, temp2: number) => {
    const errors = {
        temp1: {errorLevel: 0, message: "", pdf: ""} as ErrorFormat,
        temp2: {errorLevel: 0, message: "", pdf: ""} as ErrorFormat,
    }

    if (temp1 < -120) {
        errors.temp1.errorLevel = 2;
        errors.temp1.message = "Capteur de température ambiant déconnecté !";
        errors.temp1.pdf = "gamme-04"
        return errors;
    }
    if (temp2 < -120) {
        errors.temp2.errorLevel = 2;
        errors.temp2.message = "Capteur de température déconnecté !";
        errors.temp2.pdf = "gamme-03"
        return errors;
    }

    if (temp1 < 30 && temp2 > 10) {
        errors.temp1.errorLevel = 2;
        errors.temp1.message = "Problème de fonctionnement du module peltier";
        errors.temp1.pdf = "gamme-01"
        errors.temp2.errorLevel = 2;
        errors.temp2.message = "Problème de fonctionnement du module peltier";
        errors.temp2.pdf = "gamme-01"
        return errors;
    }

    if (temp2 > -10 && temp2 <= 7) {
        errors.temp2.errorLevel = 0;
        errors.temp2.message = "";
    } else if (temp2 > 7 && temp2 <= 10) {
        errors.temp2.errorLevel = 1;
        errors.temp2.message = "Température élevée de la bière !";
    } else if (temp2 > 10) {
        errors.temp2.errorLevel = 2;
        errors.temp2.message = "Température trop élevée de la bière !";
    }

    return errors;
}

const checkPuissance = (puissance: number) => {
    const errors = {
        puissance: {errorLevel: 0, message: "", pdf: ""} as ErrorFormat,
    }

    if (puissance < -10) {
        errors.puissance.errorLevel = 2;
        errors.puissance.message = "Wattmètre déconnecté !";
        errors.puissance.pdf = "gamme-05"
    } else if (puissance > 0 && puissance <= 70) {
        errors.puissance.errorLevel = 0;
        errors.puissance.message = "";
    } else if (puissance <= 75) {
        errors.puissance.errorLevel = 1;
        errors.puissance.message = "Puissance consommée importante !";
    } else if (puissance > 75) {
        errors.puissance.errorLevel = 2;
        errors.puissance.message = "Puissance consommée trop importante !";
        errors.puissance.pdf = "gamme-06"
    }

    return errors;
}

const checkNiveau = (niveau: number) => {
    const errors = {
        niveau: {errorLevel: 0, message: "", pdf: ""} as ErrorFormat,
    }

    if (niveau > 20) {
        errors.niveau.errorLevel = 0;
        errors.niveau.message = "";
    } else if (niveau > 10) {
        errors.niveau.errorLevel = 1;
        errors.niveau.message = "Niveau de bière faible !";
    } else {
        errors.niveau.errorLevel = 2;
        errors.niveau.message = "Le fût est bientôt vide, pensez à le recharger";
    }

    return errors;
}

const checkCO2 = (co2: number) => {
    const errors = {
        co2: {errorLevel: 0, message: "", pdf: ""} as ErrorFormat,
    }

    if (co2 < 20) {
        errors.co2.errorLevel = 0;
        errors.co2.message = "";
    } else if (co2 < 40) {
        errors.co2.errorLevel = 1;
        errors.co2.message = "Quantité de CO2 élevée !";
    } else {
        errors.co2.errorLevel = 2;
        errors.co2.message = "Quantité de CO2 trop élevée !";
    }

    return errors;
}

export {checkTemp, checkPuissance, checkNiveau, checkCO2}