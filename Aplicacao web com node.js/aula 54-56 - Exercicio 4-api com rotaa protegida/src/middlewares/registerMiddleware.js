const registerMiddleware = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];
  if (!name || name.length < 3) {
    errors.push({
      param: name,
      msg: "O nome deve ter pelo menos 3 caracteres",
    });
  }
  if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    errors.push({
      param: "email",
      msg: " Email inválido",
    });
  }
  if (!password || password.length < 7) {
    errors.push({
      param: "password",
      msg: "A senha precisa ter mais de 6 caracteres",
    });
  } else if (!/[0-9]/.test(password)) {
    errors.push({
      param: "password",
      msg: "A senha precisa de pelo menos um número",
    });
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push({
      param: "password",
      msg: "A senha deve ter pelo menos 1 caracter especial",
    });
  }
  if (errors.length > 0) {
    res.status(400).json({ errors });
  }
  next();
};
module.exports = registerMiddleware;
