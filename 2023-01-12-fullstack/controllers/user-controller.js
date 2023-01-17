const bcrypt = require("bcryptjs");
const db = require("../models");
const { User } = db;

const userController = {
  signUpPage: (req, res) => {
    res.render("signup");
  },
  signUp: (req, res, next) => {
    const { name, email, password, passwordCheck } = req.body;
    if (password !== passwordCheck) throw new Error("輸入的密碼兩者不相同！");

    User.findOne({ where: { email } })
      .then((user) => {
        if (user) throw new Error("此信箱已存在！");
        return bcrypt.hash(password, 10);
      })
      .then((hash) =>
        User.create({
          name,
          email,
          password: hash,
        })
      )
      .then(() => {
        req.flash("success_messages", "成功註冊帳號！");
        req.redirect("/signin");
      })
      .catch((err) => next(err));
  },
  signInPage: (req, res) => {
    res.render("signin");
  },
  signIn: (req, res) => {
    req.flash("success_messages", "登入成功！");
    res.redirect("/prjects");
  },
  logout: (req, res) => {
    req.flash("success_messages", "登出成功！");
    req.logout();
    res.redirect("/signin");
  },
};

module.exports = userController;
