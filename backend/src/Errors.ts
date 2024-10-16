export class CustomError extends Error {
  cause?: Error;

  constructor(message: string, cause?: Error) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    if (cause) {
      this.cause = cause;
    }
    this.name = this.constructor.name;
  }

  get statusCode() {
    if (this.name === "BadRequestError") return 400;
    return 500;
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string, cause?: Error) {
    super(message, cause);
  }
}
