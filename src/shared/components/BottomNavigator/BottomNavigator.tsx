import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './BottomNavigator.scss';
import { BNAnimation } from './animation';
import { hapticFeedback, ImpactHapticFeedbackStyle } from '@telegram-apps/sdk-react';

interface NavigatorData {
	url: string;
	icon: (className: string) => ReactElement;
	haptic: ImpactHapticFeedbackStyle;
	label: string;
}

const BottomNavigatorLink = ({ NavigatorLinkData }: { NavigatorLinkData: NavigatorData }) => {
	return (
		<Link
			to={'/'}
			className="bottom-navigator_link"
			onClick={() => {
				if (hapticFeedback.impactOccurred.isAvailable()) {
					hapticFeedback.impactOccurred(NavigatorLinkData.haptic);
				}
			}}
		>
			{NavigatorLinkData.icon('bottom-navigator_link-icon')}
			<p className="bottom-navigator_link-label">{NavigatorLinkData.label}</p>
		</Link>
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
