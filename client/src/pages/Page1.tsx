import { Link } from 'react-router-dom';
import { httpPost } from '../http/http';

const Page1 = () => {
	const clickFunc = () => {
		httpPost('/login', {
			username: 'zenos',
			password: '123',
		}).then(console.log);
	};
	return (
		<div>
			<h1 onClick={clickFunc}>login</h1>
			Page 1
			<div>
				<Link to="../page2">Go To page2</Link>
			</div>
		</div>
	);
};

export default Page1;
