import jwt from 'jsonwebtoken';

const secretKey = 'todo-list';
const JWT = {
	generate: (value: Record<string, unknown>, expries: string) => {
		return jwt.sign(value, secretKey, { expiresIn: expries });
	},

	verify: (token: string) => {
		try {
			return jwt.verify(token, secretKey);
		} catch (error) {
			return false;
		}
	},
};

export default JWT;
