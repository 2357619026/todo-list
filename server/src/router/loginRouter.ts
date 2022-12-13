import axios from "axios";
import express from "express";
import UserModel from "../model/userModel";
import JWT from "../util/JWT";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
	// console.log("url");

	// console.log(req.url, req.baseUrl, req.originalUrl);
	// const resultFrom3045 = await axios.post("http://localhost:3045/login", req.body);
	// setTimeout(() => {
	// 	res.send(resultFrom3045.data);
	// }, 1000 * 10);
	const { username, password } = req.body;
	const data = await UserModel.find({ username, password });

	if (data.length === 0) {
		res.send({ ok: 0 });
	} else {
		// set token
		const token = JWT.generate(
			{
				username: data[0].username,
			},
			"10s"
		);
		res.header("Authorization", token);

		//session
		(req.session as any).user = data[0].username;
		res.send({ ok: 1 });
	}
});

loginRouter.get("/page", (req, res) => {
	res.send("login");
});

export default loginRouter;
