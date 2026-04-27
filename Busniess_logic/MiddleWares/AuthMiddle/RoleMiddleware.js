const roleMiddleware = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin only.",
      });
    }
    next();
  };
};

module.exports = roleMiddleware;