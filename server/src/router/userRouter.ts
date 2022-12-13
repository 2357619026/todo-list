import express from "express";
const userRouter = express.Router();

userRouter.get("/all", (req, res) => {
	console.log(req.headers);
	// res.redirect(302, "http://localhost:3045/user/all");
	res.send({ ok: 1 });
});

export default userRouter;
