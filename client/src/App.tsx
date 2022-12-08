import React from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/list/page" replace />} />
					<Route path="/list">
						<Route path="page1" element={<Page1 />} />
						<Route path="page2" element={<Page2 />} />
						<Route path="*" element={<Page1 />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
