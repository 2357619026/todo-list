import express from 'express';
const userRouter = express.Router();

userRouter.get('/all', (req, res) => {
	console.log(req.headers);

	res.send({ ok: 1 });
});

export default userRouter;
