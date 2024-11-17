import { mountBackButton, mountThemeParams, bindThemeParamsCssVars, unmountBackButton, unmountThemeParams } from '@telegram-apps/sdk';
import { useEffect } from 'react';

function useTelegramSDKMount() {
	useEffect(() => {
		if (mountBackButton.isAvailable()) mountBackButton();
		if (mountThemeParams.isAvailable()) mountThemeParams();
		if (bindThemeParamsCssVars.isAvailable()) bindThemeParamsCssVars();

		return () => {
			unmountBackButton();
			unmountThemeParams();
		};
	}, []);
}

export { useTelegramSDKMount };
