type Color = {
  reset: string;
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
  white: string;
  grey: string;
  backgroundBlack: string;
  backgroundRed: string;
  backgroundGreen: string;
  backgroundYellow: string;
  backgroundBlue: string;
  backgroundMagenta: string;
  backgroundCyan: string;
  backgroundWhite: string;
  backgroundGrey: string;
};

const color: Color = {
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
};

type Sources = {
  text: string;
  background: string;
  icon: string;
};

type MessageType = "text" | "background" | "icon";

function printMessage(type: string, sources: Sources, message: string) {
  const source = sources[type];
  if (source) {
    console.log(`${source} ${message}${color.reset}`);
  } else {
    throw new TypeError("missing parameters.");
  }
}

const Consola = {
  success(type: MessageType = "text", message: any) {
    const sources: Sources = {
      text: `${color.white}[${color.green}SUCCESS${color.white}]`,
      background: `${color.backgroundGreen}SUCCESS`,
      icon: `${color.green}✔`,
    };
    printMessage(type, sources, message);
  },

  error(type: MessageType = "text", message: any) {
    const sources: Sources = {
      text: `${color.white}[${color.red}ERROR${color.white}]`,
      background: `${color.backgroundRed}ERROR`,
      icon: `${color.red}✖`,
    };
    printMessage(type, sources, message);
  },

  warn(type: MessageType = "text", message: any) {
    const sources: Sources = {
      text: `${color.white}[${color.yellow}WARN${color.white}]`,
      background: `${color.backgroundYellow}WARN`,
      icon: `${color.yellow}⚠`,
    };
    printMessage(type, sources, message);
  },

  info(type: MessageType = "text", message: any) {
    const sources: Sources = {
      text: `${color.white}[${color.blue}INFO${color.white}]`,
      background: `${color.backgroundBlue}INFO`,
      icon: `${color.blue}✖`,
    };
    printMessage(type, sources, message);
  },

  debug(type: MessageType = "text", message: any) {
    const sources: Sources = {
      text: `${color.white}[${color.grey}DEBUG${color.white}]`,
      background: `${color.backgroundGrey}DEBUG`,
      icon: `${color.grey}#`,
    };
    printMessage(type, sources, message);
  },
};

export default Consola;
