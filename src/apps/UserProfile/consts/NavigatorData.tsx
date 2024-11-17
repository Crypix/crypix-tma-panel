import { WalletIcon, HomeIcon } from '@shared/static/icons';

const NavigatorData = [
	{
		url: '/', //'/profile/home',
		icon: (className: string) => <HomeIcon className={className} />,
		haptic: 'light' as const,
		label: 'Home',
	},
	{
		url: '/profile/wallet',
		icon: (className: string) => <WalletIcon className={className} />,
		haptic: 'light' as const,
		label: 'Wallet',
	},
];

export { NavigatorData };
