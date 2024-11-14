import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { LaunchParamsProvider } from './providers/LaunchParamsProvider.tsx';
import { UserProvider } from './providers/UserAuthProvider.tsx';
import { UserTonWalletProvider } from './providers/UserTonWallet.tsx';

createRoot(document.getElementById('root')!).render(
	<TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json">
		<LaunchParamsProvider>
			<UserTonWalletProvider>
				<UserProvider>
					<App />
				</UserProvider>
			</UserTonWalletProvider>
		</LaunchParamsProvider>
	</TonConnectUIProvider>,
);
