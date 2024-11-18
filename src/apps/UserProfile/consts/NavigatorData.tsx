import { WalletIcon, HomeIcon } from '@shared/static/icons';

const NavigatorData = [
	{
		url: '/user/profile',
		icon: (className: string) => <HomeIcon className={className} />,
		haptic: 'light' as const,
		label: 'Home',
	},
	{
		url: '/user/wallet',
		icon: (className: string) => <WalletIcon className={className} />,
		haptic: 'light' as const,
		label: 'Wallet',
	},
];

export { NavigatorData };
