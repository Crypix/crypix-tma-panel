import { LaunchParams, useLaunchParams } from '@telegram-apps/sdk-react';
import { createContext, useContext, ReactElement } from 'react';

const LaunchParamsContext = createContext<LaunchParams>(null!);

const useLaunchParamsContext = () => {
	return useContext(LaunchParamsContext);
};

const LaunchParamsProvider = ({ children }: { children: ReactElement | ReactElement[] }): ReactElement => {
	const userLaunchParams = useLaunchParams();
	return <LaunchParamsContext.Provider value={userLaunchParams}>{children}</LaunchParamsContext.Provider>;
};

export { useLaunchParamsContext, LaunchParamsProvider };
