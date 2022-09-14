class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${ statusCode }`.startsWith('4') ? " fail " : " error ";
    this.isOperational = true; // For unexpected error

    Error.captureStackTrace(this, this.constructor);
    //this = class itself
    //when a new object is created, and a constructor function is called,
    //then that function call is not gonna appear in the stack trace, and will not pollute it.

  }
}

module.exports = AppError;
