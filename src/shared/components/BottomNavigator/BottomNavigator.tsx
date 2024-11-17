import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import './BottomNavigator.scss';
import { BNAnimation } from './animation';
import { hapticFeedbackImpactOccurred, ImpactHapticFeedbackStyle } from '@telegram-apps/sdk-react';

interface NavigatorData {
	url: string;
	icon: (className: string) => ReactElement;
	haptic: ImpactHapticFeedbackStyle;
	label: string;
}

const BottomNavigatorLink = ({ NavigatorLinkData }: { NavigatorLinkData: NavigatorData }) => {
	return (
		<NavLink
			to={NavigatorLinkData.url}
			className={({ isActive }) => {
				return `${isActive ? 'bottom-navigator_link__active' : ''} bottom-navigator_link`;
			}}
			onClick={() => {
				if (hapticFeedbackImpactOccurred.isAvailable()) {
					hapticFeedbackImpactOccurred(NavigatorLinkData.haptic);
				}
			}}
		>
			{NavigatorLinkData.icon('bottom-navigator_link-icon')}
			<p className="bottom-navigator_link-label">{NavigatorLinkData.label}</p>
		</NavLink>
	);
};

function BottomNavigator({ NavigatorLinksData }: { NavigatorLinksData: NavigatorData[] }): ReactElement {
	return (
		<div className="bottom-navigator_container">
			<motion.div variants={BNAnimation} initial="initial" animate="animate" className="bottom-navigator_wrapper">
				<div className="bottom-navigator_links">
					{NavigatorLinksData.map((NavigatorLinkData) => {
						return <BottomNavigatorLink NavigatorLinkData={NavigatorLinkData} key={NavigatorLinkData.url} />;
					})}
				</div>
			</motion.div>
		</div>
	);
}

export type { NavigatorData };
export { BottomNavigator };
