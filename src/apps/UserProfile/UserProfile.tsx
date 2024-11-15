import { motion } from 'motion/react';
import { BottomNavigator } from '../../shared/components/BottomNavigator/BottomNavigator';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { WalletIcon, HomeIcon } from '@shared/icons';

const NavigatorData = [
	{
		url: '/profile/wallet',
		icon: (className: string) => <WalletIcon className={className} />,
		haptic: 'light' as const,
		label: 'home',
	},
	{
		url: '/profile/home',
		icon: (className: string) => <HomeIcon className={className} />,
		haptic: 'light' as const,
		label: 'home',
	},
];

function UserProfileOutlet(): ReactElement {
	return (
		<motion.div exit={{ opacity: 0 }}>
			<BottomNavigator NavigatorLinksData={NavigatorData} />
			<Outlet />
		</motion.div>
	);
}

export { UserProfileOutlet };
