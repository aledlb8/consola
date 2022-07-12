const color = {
    reset: "\x1b[0m",
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    gray: "\x1b[90m",
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
    backgroundGray: "\x1b[100m",
};

const consola = {
    log: function(message?: any) {
        /**
         * @log
         * @param message {string}
         * @returns {void}
         * @example consola.log("Hello World");
         */
        
        console.log(message || "");
    },
    success: function(message?: any, type?: string): void {
        /**
         * @success
         * @param message {string}
         * @param type {string}
         * @returns {void}
         * @example consola.success("This is a success", "text");
         */
        
        if(!message) console.log(`${color.green}✔${color.reset}`);
        if(!type) throw new Error("Type is required");
        if(type == "text") {
            console.log(`${color.white}[${color.green}SUCCESS${color.white}] ${color.reset}${message}`)
        } else if(type == "background") {
            console.log(`${color.backgroundGreen}SUCCESS${color.reset} ${message}`);
        } else if(type == "icon") {
            console.log(`${color.green}✔${color.reset} ${message}`);
        } else {
            throw new Error("Invalid type");
        }
    },
    error: function(message?: any, type?: string): void {
        /**
         * @error
         * @param message {string}
         * @param type {string}
         * @returns {void}
         * @example consola.error("This is a error", "text");
         */
        
        if(!message) console.log(`${color.red}✖${color.reset}`);
        if(!type) throw new Error("Type is required");
        if(type == "text") {
            console.log(`${color.white}[${color.red}ERROR${color.white}] ${color.reset}${message}`)
        } else if(type == "background") {
            console.log(`${color.backgroundRed}ERROR${color.reset} ${message}`);
        } else if(type == "icon") {
            console.log(`${color.red}✖${color.reset} ${message}`)
        } else {
            throw new Error("Invalid type");
        }
    },
    warn: function(message?: any, type?: string): void {
        /**
         * @warn
         * @param message {string}
         * @param type {string}
         * @returns {void}
         * @example consola.warn("This is a warning", "text");
         */
        
        if(!message) console.log(`${color.yellow}⚠${color.reset}`);
        if(!type) throw new Error("Type is required");
        if(type == "text") {
            console.log(`${color.white}[${color.yellow}WARN${color.white}] ${color.reset}${message}`);
        } else if(type == "background") {
            console.log(`${color.backgroundYellow}WARN${color.reset} ${message}`);
        } else if(type == "icon") {
            console.log(`${color.yellow}⚠${color.reset} ${message}`);
        } else {
            throw new Error("Invalid type");
        }
    },
    info: function(message?: any, type?: string): void {
        /**
         * @info
         * @param message {string}
         * @param type {string}
         * @returns {void}
         * @example consola.info("This is a info", "text");
         */
        
        if(!message) console.log(`${color.cyan}ⓘ${color.reset}`);
        if(!type) throw new Error("Type is required");
        if(type == "text") {
            console.log(`${color.white}[${color.blue}INFO${color.white}] ${color.reset}${message}`);
        } else if(type == "background") {
            console.log(`${color.backgroundBlue}INFO${color.reset} ${message}`);
        } else if(type == "icon") {
            console.log(`${color.blue}ⓘ${color.reset} ${message}`);
        } else {
            throw new Error("Invalid type");
        }
    },
    debug: function(message?: any, type?: string): void {
        /**
         * @debug
         * @param message {string}
         * @param type {string}
         * @returns {void}
         * @example consola.debug("This is a debug", "text");
         */
        
        if(!message) console.log(`${color.gray}⚙${color.reset}`);
        if(!type) throw new Error("Type is required");
        if(type == "text") {
            console.log(`${color.white}[${color.grey}DEBUG${color.white}] ${color.reset}${message}`);
        } else if(type == "background") {
            console.log(`${color.backgroundGrey}DEBUG${color.reset} ${message}`);
        } else if(type == "icon") {
            console.log(`${color.grey}⚠${color.reset} ${message}`)
        } else {
            throw new Error("Invalid type");
        }
    },
    clear: function(): void {
        /**
         * @clear
         * @returns {void}
         * @example consola.clear();
         */
        
        console.clear();
    },
};

export default consola;
