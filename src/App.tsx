import { ReactElement, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { LaunchParamsProvider, useLaunchParamsContext } from './context/LaunchParamsProvider';
import { ApiAxios } from './utils/AxiosInstances';
import { TonConnectButton, TonConnectUIProvider, useTonAddress } from '@tonconnect/ui-react';

function Test() {
	const LaunchParams = useLaunchParamsContext();

	console.log(LaunchParams);
	useEffect(() => {
		ApiAxios({
			method: 'POST',
			url: '/auth',
			headers: {
				Authorization: `tma ${LaunchParams.initDataRaw}`,
			},
		}).then((res) => {
			console.log(res);
		});
	}, []);

	return <></>;
}

function WalletConnect(): ReactElement {
	const userFriendlyAddress = useTonAddress();
	const rawAddress = useTonAddress(false);

	return (
		<div>
			<TonConnectButton />
			<span>User-friendly address: {userFriendlyAddress}</span>
			<span>Raw address: {rawAddress}</span>
		</div>
	);
}
function App() {
	const [count, setCount] = useState(0);

	return (
		<TonConnectUIProvider manifestUrl="/src/assets/tonconnect-manifest.json">
			<LaunchParamsProvider>
				{/* <Test /> */}
				<WalletConnect />
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
				</div>
			</LaunchParamsProvider>
		</TonConnectUIProvider>
	);
}

export default App;
