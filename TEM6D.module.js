export const T6D = {

    // 6D Zeitvektor
    t: [0, 0, 0],   // t1 = ALT, t2 = GHOST, t3 = REAL

    // Zeitfluss in 6 Dimensionen
    flow(v, a, g){
        const ε = 0.000001; // Kopplungsparameter (physikalisch erlaubt)

        this.t[0] += v * ε;        // ALT-Zeit
        this.t[1] += a * ε;        // GHOST-Zeit
        this.t[2] += g * ε;        // REAL-Zeit

        return this.t;
    },

    // Projektion zurück in 4D (iki1uc-Hauptzeit)
    project4D(){
        return this.t[2]; // REAL ist deine Hauptzeit
    }
};
