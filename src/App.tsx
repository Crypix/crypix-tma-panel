import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import { ApiAxios } from './utils/AxiosInstances';
// import { TonConnectButton, useTonAddress, useTonWallet } from '@tonconnect/ui-react';

// function Test() {
// 	const LaunchParams = useLaunchParamsContext();

// 	console.log(LaunchParams);
// 	useEffect(() => {
// 		ApiAxios({
// 			method: 'POST',
// 			url: '/auth',
// 			headers: {
// 				Authorization: `tma ${LaunchParams.initDataRaw}`,
// 			},
// 		}).then((res) => {
// 			console.log(res);
// 		});
// 	}, []);

// 	return <></>;
// }

// function WalletConnect(): ReactElement {
// 	const userFriendlyAddress = useTonAddress();
// 	const rawAddress = useTonAddress(false);
// 	const wallet = useTonWallet();

// 	return (
// 		<div>
// 			<TonConnectButton />
// 			<div>User-friendly address: {userFriendlyAddress}</div>
// 			<div>Raw address: {rawAddress}</div>
// 			<div>current wallet: {wallet ? JSON.stringify(wallet) : null}</div>
// 		</div>
// 	);
// }
function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
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
		</div>
	);
}

export default App;

//git subtree push --prefix dist origin gh-pages
