import express from 'express';
import UserModel from '../model/userModel';
import JWT from '../util/JWT';

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
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
			'10s'
		);
		res.header('Authorization', token);

		//session
		(req.session as any).user = data[0].username;
		res.send({ ok: 1 });
	}
});

loginRouter.get('/page', (req, res) => {
	res.send('login');
});

export default loginRouter;
