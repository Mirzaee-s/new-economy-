const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("پلتفرم اقتصادی جدید آنلاین شد!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

// نمایش صفحه ثبت‌نام
app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

// دریافت اطلاعات و ثبت در دیتابیس
app.post("/register", (req, res) => {
    const { name, phone, password } = req.body;
    
    // ذخیره در دیتابیس (در آینده اضافه می‌شود)
    console.log(`کاربر جدید: ${name} - ${phone}`);
    
    res.send("ثبت‌نام با موفقیت انجام شد!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
