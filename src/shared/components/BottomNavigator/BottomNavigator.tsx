import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './BottomNavigator.scss';
import { HomeIcon } from '../../icons';
import { BNAnimation } from './animation';

const BottomNavigatorLink = () => {
	return (
		<Link to={'/'} className="bottom-navigator_link">
			<HomeIcon className="bottom-navigator_link-icon" />
			<p className="bottom-navigator_link-label">home</p>
		</Link>
	);
};

function BottomNavigator(): ReactElement {
	return (
		<div className="bottom-navigator_container">
			<motion.div variants={BNAnimation} initial="initial" animate="animate" className="bottom-navigator_wrapper">
				<div className="bottom-navigator_links">
					<BottomNavigatorLink />
					<BottomNavigatorLink />
					<BottomNavigatorLink />
					<BottomNavigatorLink />
				</div>
			</motion.div>
		</div>
	);
}

export { BottomNavigator };
