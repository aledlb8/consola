enum TextColor {
  Reset = "\x1b[0m",
  Black = "\x1b[30m",
  Red = "\x1b[31m",
  Green = "\x1b[32m",
  Yellow = "\x1b[33m",
  Blue = "\x1b[34m",
  Magenta = "\x1b[35m",
  Cyan = "\x1b[36m",
  White = "\x1b[37m",
  Grey = "\x1b[90m",
}

enum BackgroundColor {
  Black = "\x1b[40m",
  Red = "\x1b[41m",
  Green = "\x1b[42m",
  Yellow = "\x1b[43m",
  Blue = "\x1b[44m",
  Magenta = "\x1b[45m",
  Cyan = "\x1b[46m",
  White = "\x1b[47m",
  Grey = "\x1b[100m",
}

function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${TextColor.White}[${TextColor.Cyan}${hours}${TextColor.White}:${TextColor.Cyan}${minutes}${TextColor.White}:${TextColor.Cyan}${seconds}${TextColor.White}]${TextColor.Reset}`;
}

interface Logger {
  (message?: any): void;
}

const createLogger = (level: string, color: TextColor): Logger => {
  return (message?: any): void => {
    const text = `${getCurrentTime()} ${TextColor.White}[${color}${level}${TextColor.White}] ${TextColor.Reset}${message !== undefined ? message : ' '}`;
    console.log(text);
  };
};

const consola = {
  success: createLogger("SUCCESS", TextColor.Green),
  error: createLogger("ERROR", TextColor.Red),
  warn: createLogger("WARN", TextColor.Yellow),
  info: createLogger("INFO", TextColor.Blue),
  debug: createLogger("DEBUG", TextColor.Grey),
};

export default consola;
