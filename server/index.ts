// require("appdynamics").profile({
// 	controllerHostName: "curie202211291909122.saas.appdynamics.com",
// 	controllerPort: 80,
// 	accountName: "curie202211291909122",
// 	accountAccessKey: "12a8vy2c7flp",
// 	applicationName: "zenosApp",
// 	tierName: process.argv[2] || "zenosTier2",
// 	nodeName: "process", // The controller will automatically append the node name with a unique number
// });
import express from "express";
import path from "path";
import UserModel from "./src/model/userModel";
import loginRouter from "./src/router/loginRouter";
import userRouter from "./src/router/userRouter";
import MongoStore from "connect-mongo";
import session from "express-session";
import { mongoStoreConfig } from "./src/config/configConstant";
require("./src/config/db.config");
// mongoStoreConfig;
//中间件
const app = express();
// 解析请求体，form形式，json形式
app.use(express.json());
// 跨域
app.use((req, res, next) => {
	res.header("Access-Control-Allow-origin", "*");
	res.header("Access-Control-Allow-headers", "*");
	// 允许前端获取的头部
	res.header("Access-Control-Expose-Headers", "*");
	next();
});
// 解析cookie
// 设置解析引擎
app.set("views", path.join(__dirname, "./src/views"));
// 静态资源
// app.use(express.static(path.join(__dirname, './src/public')));
app.use(express.static(path.join(__dirname, "./build")));
// log

// session中间件
app.use(
	session({
		name: "login-token-todolist",
		secret: "login-token-secret",
		cookie: {
			maxAge: 1000 * 60 * 5, //5 mins
			secure: true,
		},
		resave: true,
		saveUninitialized: true,
		store: MongoStore.create(mongoStoreConfig) as unknown as session.Store,
	})
);
// 检查是否登录
app.use((req, res, next) => {
	// console.log(req.session);
	// console.log((req.session as any).user);
	next();
});
// UserModel.create({ username: 'zenos', password: 123 });
UserModel.find().then((data) => console.log(data));
// 解析路由

app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/list", (req, res) => {
	console.log("list");
	// res.sendFile(path.join(__dirname, "./build/index.html"));
	res.redirect("/");
});

// 容错处理

app.listen(process.argv[2] || 3044, () => {
	console.log("server started");
});
