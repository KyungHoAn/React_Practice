// express.js -> web application framework for Node.js (node.js)를 쉽게 이용할 수 있게 도와주는 framework
// KyungHoAn akh1216
const express = require("express");
const app = express();
const port = 5000;

const bodyParser = require("body-parser"); //server에서 분석해서 가져올 수 있게 해준다.
const { User } = require("./models/User");

// application /x-www-fromurlencoded ->  분석해서 가져올 수 있게 해준다.
app.use(bodyParser.urlencoded({ extended: true }));
// application / json 를 분석해서 가져올수 잇게 해준다.
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://KyungHoAn:akh1216@pjt01.yiceuzg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body); //mongodb에서 오는 정보

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
