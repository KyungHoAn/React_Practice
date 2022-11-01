const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// salt를 이용하여 비밀버호를 암호화
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    //토큰 유효기간
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  // 비밀번호를 암호화 시킨다.
  var user = this;

  //비밀번호를 바꿀때만 암호화를 진행하기 위해서 조건문을 넣었다.
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  }

  // bcrypt.genSalt(saltRounds, function (err, salt) {
  //   bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
  //     // Stroe hash in your password DB.
  //   });
  // });
  // next()
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
