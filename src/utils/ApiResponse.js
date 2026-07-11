const ApiResponse = (statusCode, data = null, message = "Success") => {
  return {
    success: true,
    statusCode,
    message,
    data,
  };
};

export default ApiResponse;
