
class AppError extends Error {

    constructor(message, statusCode = 404) {
      super();
      this.message = {message};
      this.statusCode = statusCode;
    }
}

const errorGlobal = (error, request, response, next) => {
     if(error instanceof AppError){
        return response.status(error.statusCode).json(error.message)
    }

    console.log(error)

    return response.status(500).json({
        message: 'Internal server error'
    })

}

export {AppError, errorGlobal};