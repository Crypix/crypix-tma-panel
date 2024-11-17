import { ThemeMode } from '@const/theme';
import { on, themeParams } from '@telegram-apps/sdk';
import { useState } from 'react';

const DARK_MODE = '#17212b';

const GetTheme = (color: string): ThemeMode => {
	return color === DARK_MODE ? ThemeMode.DARK : ThemeMode.LIGHT;
};

function useTheme(): ThemeMode {
	const [theme, setTheme] = useState<ThemeMode>(() => {
		if (themeParams.isMounted() === false && themeParams.mount.isAvailable()) {
			themeParams.mount();
		}
		return GetTheme(themeParams.backgroundColor() as string);
	});
	on('theme_changed', (payload) => {
		setTheme(GetTheme(payload.theme_params.bg_color as string));
	});
	return theme;
}

export { useTheme };
