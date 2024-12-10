const loginValdiator = (req, res, next) => {
  const { email, password } = req.body;
  next();
};
