import { useNavigate } from 'react-router-dom';
import { httpGet } from '../http/http';

const Page2 = () => {
	const navigater = useNavigate();

	const clickFunc = () => {
		console.log('navigate to page1');
		navigater('../page1');
	};

	const clickFunc2 = () => {
		httpGet('/user/all').then(console.log);
	};
	return (
		<div onClick={clickFunc}>
			<h1 onClick={clickFunc2}>user all</h1>
			Page 2
		</div>
	);
};

export default Page2;
