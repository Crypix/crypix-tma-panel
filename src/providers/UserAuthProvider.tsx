import { createContext, useContext, ReactElement, useState, useEffect } from 'react';
import { useLaunchParamsContext } from './LaunchParamsProvider';
import { ApiAxios } from '@utils/AxiosInstances';

import { useUserTonWalletCurrent } from './UserTonWallet';

const UserContext = createContext<any>(null!);

const useUserContext = () => {
	return useContext(UserContext);
};

const UserProvider = ({ children }: { children: ReactElement | ReactElement[] }): ReactElement => {
	const [UserData, setUserData] = useState<any>(null!);

	const LaunchParams = useLaunchParamsContext();
	const UserWallet = useUserTonWalletCurrent();

	useEffect(() => {
		const config = {
			method: 'POST',
			url: '/auth',
			data: { wallet: UserWallet },
			headers: { Authorization: `tma ${LaunchParams.initDataRaw}` },
		};
		ApiAxios(config).then((result) => setUserData(result));
	}, []);

	return <UserContext.Provider value={UserData}>{children}</UserContext.Provider>;
};

export { useUserContext, UserProvider };
