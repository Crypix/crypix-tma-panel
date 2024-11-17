import { StarBackground } from '@shared/components/StarBackground/StarBackground';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import './WalletConnect.scss';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';
import { TonIcon } from '@shared/static/icons';
import { UserTonWalletContext, useUserTonWalletContext } from '@providers/UserTonWallet';
import { CardAnimation, HeaderAnimation, TonIconAnimation, CardContentAnimation } from './animation';
import { AdorableDuckLoading } from '@shared/static/gifs';

function WalletConnectedElement({ UserTonWallet }: { UserTonWallet: UserTonWalletContext }): ReactElement {
	const [tonConnectUI] = useTonConnectUI();

	const data = {
		Address: UserTonWallet.Current?.UserFriendly,
		Raw: UserTonWallet.Current?.RawAddress,
	};

	const ImageURL: string = (UserTonWallet.FullData as any).imageUrl;
	const WalletName: string = (UserTonWallet.FullData as any).name;

	return (
		<motion.div className="user-wallet__connected-wrapper" variants={CardAnimation} initial="initial" animate="animate">
			<motion.div className="user-wallet__connected-wallet-info" variants={CardContentAnimation} initial="initial" animate="animate">
				<img src={ImageURL} className="user-wallet__connected-icon" />
				<p className="user-wallet__connected-name">{WalletName}</p>
			</motion.div>
			<motion.div className="user-wallet__connected-data" variants={CardContentAnimation} initial="initial" animate="animate">
				{Object.keys(data).map((key) => {
					return (
						<div className="user-wallet__connected-data__item" key={key}>
							<span className="user-wallet__connected-data__item-key">{key}: </span>
							<span className="user-wallet__connected-data__item-value">{data[key as keyof typeof data]}</span>
						</div>
					);
				})}
			</motion.div>
			<motion.button
				variants={CardContentAnimation}
				initial="initial"
				animate="animate"
				className="user-wallet__connected-disconnect"
				onClick={() => {
					tonConnectUI.disconnect();
				}}
			>
				Disconnect wallet
			</motion.button>
		</motion.div>
	);
}

function ConnectWalletElement() {
	return (
		<motion.div className="user-wallet__connect-wrapper" variants={CardAnimation} initial="initial" animate="animate">
			<img src={AdorableDuckLoading} className="user-wallet__connect-gif" />
			<motion.div className="user-wallet__connect-info" variants={CardContentAnimation} initial="initial" animate="animate">
				<p className="user-wallet__connect-text user-wallet__connect-text-primary">You didnt't connected any wallet yet</p>
				<p className="user-wallet__connect-text">Connect ton wallet to begin buying or selling using $TON with crypix right now!</p>
			</motion.div>
			<TonConnectButton className="user-wallet__connect-button" />
		</motion.div>
	);
}

function WalletConnect(): ReactElement {
	const UserTonWallet = useUserTonWalletContext();

	console.log(UserTonWallet);
	return (
		<>
			<StarBackground count={35} />
			<div className="user-wallet__container">
				<div className="user-wallet__header-wrapper">
					<motion.span variants={TonIconAnimation} initial="initial" animate="animate">
						<TonIcon className="user-wallet__ton-icon" />
					</motion.span>
					<motion.h1 className="user-wallet__header" variants={HeaderAnimation} initial="initial" animate="animate">
						Ton wallet
					</motion.h1>
				</div>
				{UserTonWallet.isConnected ? <WalletConnectedElement UserTonWallet={UserTonWallet} /> : null}
				{!UserTonWallet.isConnected ? <ConnectWalletElement /> : null}
			</div>
		</>
	);
}

export { WalletConnect };
