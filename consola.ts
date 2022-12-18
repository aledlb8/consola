const color: any = {
    reset: "\x1b[0m",
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    grey: "\x1b[90m",

    backgroundBlack: "\x1b[40m",
    backgroundRed: "\x1b[41m",
    backgroundGreen: "\x1b[42m",
    backgroundYellow: "\x1b[43m",
    backgroundBlue: "\x1b[44m",
    backgroundMagenta: "\x1b[45m",
    backgroundCyan: "\x1b[46m",
    backgroundWhite: "\x1b[47m",
    backgroundGrey: "\x1b[100m",
}

const Consola = {    
    success: function (type?: any, message?: any): void {
        /**
         * @param {any} message
         * @param {any} type
         * @returns {void}
         */

        const sources: { [key: string]: string; } = {
            "text": `${color.white}[${color.green}SUCCESS${color.white}] ${color.reset}${message}`,
            "background": `${color.backgroundGreen}SUCCESS${color.reset} ${message}`,
            "icon": `${color.green}✔${color.reset} ${message}`,
        };

        console.log(sources[type] || noSource());
    },

    error: function (type?: any, message?: any): void {
        /**
         * @param {any} message
         * @param {any} type
         * @returns {void}
         */

         const sources: { [key: string]: string; } = {
            "text": `${color.white}[${color.red}ERROR${color.white}] ${color.reset}${message}`,
            "background": `${color.backgroundRed}ERROR${color.reset} ${message}`,
            "icon": `${color.red}✖${color.reset} ${message}`,
        };

        console.log(sources[type] || noSource());
    },

    warn: function (type?: any, message?: any): void {
        /**
         * @param {any} message
         * @param {any} type
         * @returns {void}
         */

         const sources: { [key: string]: string; } = {
            "text": `${color.white}[${color.yellow}WARN${color.white}] ${color.reset}${message}`,
            "background": `${color.backgroundYellow}WARN${color.reset} ${message}`,
            "icon": `${color.yellow}⚠${color.reset} ${message}`,
        };

        console.log(sources[type] || noSource());
    },

    info: function (type?: any, message?: any): void {
        /**
         * @param {any} message
         * @param {any} type
         * @returns {void}
         */

         const sources: { [key: string]: string; } = {
            "text": `${color.white}[${color.blue}INFO${color.white}] ${color.reset}${message}`,
            "background": `${color.backgroundBlue}INFO${color.reset} ${message}`,
            "icon": `${color.blue}✖${color.reset} ${message}`,
        };

        console.log(sources[type] || noSource());
    },

    debug: function (type?: any, message?: any): void {
        /**
         * @param {any} message
         * @param {any} type
         * @returns {void}
         */

         const sources: { [key: string]: string; } = {
            "text": `${color.white}[${color.grey}DEBUG${color.white}] ${color.reset}${message}`,
            "background": `${color.backgroundGrey}DEBUG${color.reset} ${message}`,
            "icon": `${color.grey}#${color.reset} ${message}`,
        };

        console.log(sources[type] || noSource());
    }
}

function noSource(): void {
    throw new TypeError("missing parameters.")
};

export default Consola;
