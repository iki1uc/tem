export const T6D = {
    // ALT / GHOST / REAL Zeitachsen
    t: [0, 0, 0],

    // 6D Zeitfluss
    flow(alt, ghost, real){
        const ε = 0.000001;
        this.t[0] += alt * ε;
        this.t[1] += ghost * ε;
        this.t[2] += real * ε;
        return [...this.t];
    },

    // Projektion in deine Hauptzeit (REAL)
    project(){
        return this.t[2];
    }
};
