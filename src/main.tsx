import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import 'unfonts.css';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { LaunchParamsProvider } from '@providers/LaunchParamsProvider.tsx';
import { UserTonWalletProvider } from '@providers/UserTonWallet.tsx';

import { init } from '@telegram-apps/sdk';
init();

createRoot(document.getElementById('root')!).render(
	<TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json">
		<LaunchParamsProvider>
			<UserTonWalletProvider>
				<App />

				{/* <UserProvider>
			
				</UserProvider> */}
			</UserTonWalletProvider>
		</LaunchParamsProvider>
	</TonConnectUIProvider>,
);
