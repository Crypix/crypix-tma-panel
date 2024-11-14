import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { LaunchParamsProvider } from './providers/LaunchParamsProvider';
// import { ApiAxios } from './utils/AxiosInstances';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { UserProvider } from './providers/UserAuthProvider';
import { UserTonWalletProvider } from './providers/UserTonWallet';

function App() {
	const [count, setCount] = useState(0);

	return (
		<TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json">
			<LaunchParamsProvider>
				<UserTonWalletProvider>
					<UserProvider>
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
					</UserProvider>
				</UserTonWalletProvider>
			</LaunchParamsProvider>
		</TonConnectUIProvider>
	);
}

export default App;
