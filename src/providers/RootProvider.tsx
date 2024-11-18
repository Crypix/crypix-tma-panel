import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ReactElement } from 'react';
import { LaunchParamsProvider } from './LaunchParamsProvider';
import { UserProvider } from './UserAuthProvider';
import { UserTonWalletProvider } from './UserTonWallet';

function RootProvider({ children }: { children: ReactElement }): ReactElement {
	return (
		<TonConnectUIProvider manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json">
			<LaunchParamsProvider>
				<UserTonWalletProvider>
					<UserProvider>{children}</UserProvider>
				</UserTonWalletProvider>
			</LaunchParamsProvider>
		</TonConnectUIProvider>
	);
}

export { RootProvider };
