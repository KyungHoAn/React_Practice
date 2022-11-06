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
  //토큰 유효기간
  tokenExp: {
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
  } else {
    next();
  }

  // bcrypt.genSalt(saltRounds, function (err, salt) {
  //   bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
  //     // Stroe hash in your password DB.
  //   });
  // });
  // next()
});
userSchema.methods.comparePassword = function (plainPassword, cb) {
  //plainPassword 1234567   암호화된 비밀번호
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err), cb(null, isMatch);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
