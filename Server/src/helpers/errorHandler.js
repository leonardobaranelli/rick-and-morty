class CustomError extends Error {
    constructor(message, status) {
      super(message);
      this.status = status;
    }
}

const handleServerError = (res, error) => {
    console.error(error);
    const status = error.status || 500;
    res.status(status).json({ error: error.message });
};
  
module.exports = { CustomError, handleServerError };