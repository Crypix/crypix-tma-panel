import { useEffect, useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { useIntegration } from '@telegram-apps/react-router-integration';
import { bindThemeParamsCSSVars, initNavigator, initThemeParams } from '@telegram-apps/sdk';
import { Router, Routes, Route, Navigate, Link } from 'react-router-dom';

function Home() {
	const [count, setCount] = useState(0);
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
				<Link to={'/profile'}>Profile</Link>
			</div>
		</>
	);
}

function BottomNavigator() {
	<div className="bottom-navigator_wrapper"></div>;
}

function UserProfile() {
	return <div>Hello</div>;
}

function App() {
	const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
	const [location, reactNavigator] = useIntegration(navigator);

	useEffect(() => {
		navigator.attach();
		return () => navigator.detach();
	}, [navigator]);

	const [tp] = initThemeParams();
	bindThemeParamsCSSVars(tp);

	return (
		<Router location={location} navigator={reactNavigator}>
			<Routes>
				<Route path={'/'} Component={Home} />
				<Route path={'/profile'} Component={UserProfile} />
				<Route path={'*'} element={<Navigate to={'/'} />} />
			</Routes>
		</Router>
	);
}

export default App;
