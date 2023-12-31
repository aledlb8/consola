const LogLevel = {
  Success: "SUCCESS",
  Error: "ERROR",
  Warn: "WARN",
  Info: "INFO",
  Debug: "DEBUG",
} as const;

const TextColor = {
  Reset: "\x1b[0m",
  Black: "\x1b[30m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Yellow: "\x1b[33m",
  Blue: "\x1b[34m",
  Magenta: "\x1b[35m",
  Cyan: "\x1b[36m",
  White: "\x1b[37m",
  Grey: "\x1b[90m",
} as const;

type ObjectValues<T> = T[keyof T];
type TypeLogLevel = ObjectValues<typeof LogLevel>;
type TypeColor = ObjectValues<typeof TextColor>;

function getCurrentTime(): string {
  const now: Date = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${TextColor.White}[${TextColor.Cyan}${hours}${TextColor.White}:${TextColor.Cyan}${minutes}${TextColor.White}:${TextColor.Cyan}${seconds}${TextColor.White}]${TextColor.Reset}`;
}

type Logger = {
  (message: string, ...optionalParams: never[]): void;
}

type Consola = {
  success: Logger
  error: Logger;
  warn: Logger;
  info: Logger;
  debug: Logger;
}

const createLogger = (level: TypeLogLevel, color: TypeColor): Logger => {
  return (message?: string, ...optionalParams: never[]): void => {
    const text: string = `${getCurrentTime()} ${TextColor.White}[${color}${level}${TextColor.White}] ${TextColor.Reset}${message !== undefined ? message : ' '}`
    console.log(text, ...optionalParams);
  };
};

const consola: Consola = {
  success: createLogger(LogLevel.Success, TextColor.Green),
  error: createLogger(LogLevel.Error, TextColor.Red),
  warn: createLogger(LogLevel.Error, TextColor.Yellow),
  info: createLogger(LogLevel.Error, TextColor.Blue),
  debug: createLogger(LogLevel.Error, TextColor.Grey),
};

export default consola;
