
class BaseController {
    success(res, data = [], message = 'success', httpStatus = 200) {
      res.status(httpStatus).send({
        data,
      });
    }
  
    error(res, error) {
      res.status(error.code || 400).json({
        status: 'error',
        message: error.message,
      });
    }
  }
  
  export default new BaseController();