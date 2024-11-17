import { useIsConnectionRestored, useTonAddress, useTonWallet, Wallet, WalletInfoWithOpenMethod } from '@tonconnect/ui-react';
import { createContext, useContext, ReactElement, useEffect, useState } from 'react';

interface UserTonWalletContext {
	isLoaded: boolean;
	isConnected: boolean;
	FullData: Wallet | (Wallet & WalletInfoWithOpenMethod) | null;
	Current: {
		UserFriendly: string;
		RawAddress: string;
		BridgeKey: string;
		AppName: string;
	} | null;
}

const LaunchParamsContext = createContext<UserTonWalletContext>(null!);

const useUserTonWalletContext = (): UserTonWalletContext => {
	return useContext(LaunchParamsContext);
};

const useUserTonWalletFull = (): UserTonWalletContext['FullData'] => {
	return useContext(LaunchParamsContext).FullData;
};

const useUserTonWalletCurrent = (): UserTonWalletContext['Current'] => {
	return useContext(LaunchParamsContext).Current;
};

const UserTonWalletProvider = ({ children }: { children: ReactElement | ReactElement[] }): ReactElement => {
	const connectionRestored = useIsConnectionRestored();
	const [UserWalletData, setUserWalletData] = useState<UserTonWalletContext>({
		isLoaded: connectionRestored,
		isConnected: false,
		FullData: null,
		Current: null,
	});

	const UserWallet = useTonWallet();
	const userFriendlyAddress = useTonAddress();
	const rawAddress = useTonAddress(false);

	useEffect(() => {
		setUserWalletData({
			isLoaded: connectionRestored,
			isConnected: UserWallet !== null,
			FullData: UserWallet ?? null,
			Current: UserWallet
				? {
						UserFriendly: userFriendlyAddress,
						RawAddress: rawAddress,
						AppName: (UserWallet as any)['name'],
						BridgeKey: (UserWallet as any)['jsBridgeKey'],
				  }
				: null,
		});
	}, [userFriendlyAddress, rawAddress, connectionRestored]);

	return connectionRestored ? <LaunchParamsContext.Provider value={UserWalletData}>{children}</LaunchParamsContext.Provider> : <div>loading</div>;
};

export type { UserTonWalletContext };
export { useUserTonWalletContext, UserTonWalletProvider, useUserTonWalletFull, useUserTonWalletCurrent };
