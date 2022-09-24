//khai báo module express framework
const express = require("express");
const app = express();
//khai báo module path
const path = require("path");

//khai báo server port
const port = process.env.PORT || 3000;

//set thư mục chứa view
app.set("views", path.join(__dirname, "views"));

//set view engine (template engine)
//=> giúp gõ code của back-end ngay trong front-end dễ hơn
//hbs: handle bar => nếu dùng view engine khác thì thay đổi giá trị này
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  let name = "Cloud Computing";
  let code = 1644;
  res.render("index", { name: name, ma: code, ky: "Fall 2022" });
});

app.get("/mobile", (req, res) => {
  let list = ["IPhone", "Samsung", "Oppo", "Huawei"];
  res.render("mobile", { mobiles: list });
});

app.get("/laptop", (req, res) => {
  let list = ["Lg", "MSI", "HP", "Huawei"];
  res.render("laptop", { laptops: list });
});

//listen port để chạy server
app.listen(port);