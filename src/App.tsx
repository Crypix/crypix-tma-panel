import { useState } from 'react';
import './index.scss';
import viteLogo from '/vite.svg';

import { Routes, Route, Navigate, Link, BrowserRouter } from 'react-router-dom';
import { motion } from 'motion/react';
import { UserProfileOutlet } from '@UserProfile/UserProfile';
import { WalletConnect } from '@UserProfile/components/WalletConnect/WalletConnect';

import { useTelegramSDKMount } from 'hooks/useTelegramSDKMount';
import { NavigationHistoryProvider } from '@providers/NavigationHistoryProvider';
import { useTheme } from 'hooks/useTheme';
import classNames from 'classnames';
import { ThemeMode } from '@const/theme';

function Home() {
	const [count, setCount] = useState(0);

	return (
		<motion.section>
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
	useTelegramSDKMount();
	const theme = useTheme();

	return (
		<main className={classNames('app', { dark_theme: theme === ThemeMode.DARK, light_theme: theme === ThemeMode.LIGHT })}>
			<BrowserRouter>
				<NavigationHistoryProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<UserProfileOutlet />}>
							<Route path="wallet" element={<WalletConnect />} />
						</Route>
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</NavigationHistoryProvider>
			</BrowserRouter>
		</main>
	);
}

export default App;
