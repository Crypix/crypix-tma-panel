import { useEffect, useMemo, useState } from 'react';
import './index.scss';
import viteLogo from '/vite.svg';

import { useIntegration } from '@telegram-apps/react-router-integration';
import { bindThemeParamsCSSVars, initNavigator, initThemeParams } from '@telegram-apps/sdk';
import { Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { UserProfileOutlet } from '@UserProfile/UserProfile';
import { WalletConnect } from '@UserProfile/components/WalletConnect/WalletConnect';

function Home() {
	const [count, setCount] = useState(0);
	return (
		<motion.section exit={{ opacity: 0 }}>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
				<Link to="/profile/wallet">Profile</Link>
			</div>
			<motion.div className="box" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} />
		</motion.section>
	);
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
		<AnimatePresence mode="wait">
			<Router location={location} navigator={reactNavigator} key={location.pathname}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<UserProfileOutlet />}>
						<Route path="wallet" element={<WalletConnect />} />
					</Route>
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</AnimatePresence>
	);
}

export default App;
