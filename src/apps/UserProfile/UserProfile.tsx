import { BottomNavigator } from '../../shared/components/BottomNavigator/BottomNavigator';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigatorData } from './consts/NavigatorData';

function UserProfileOutlet(): ReactElement {
	return (
		<div>
			<BottomNavigator NavigatorLinksData={NavigatorData} />
			<Outlet />
		</div>
	);
}

export { UserProfileOutlet };
