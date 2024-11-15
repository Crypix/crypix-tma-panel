import { motion } from 'motion/react';
import { BottomNavigator } from '../../shared/components/BottomNavigator/BottomNavigator';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

function UserProfileOutlet(): ReactElement {
	return (
		<motion.div exit={{ opacity: 0 }}>
			<BottomNavigator />
			<Outlet />
		</motion.div>
	);
}

export { UserProfileOutlet };
