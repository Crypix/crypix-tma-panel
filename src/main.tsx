import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import 'unfonts.css';

import { init } from '@telegram-apps/sdk';
import { RootProvider } from '@providers/RootProvider.tsx';
init();

createRoot(document.getElementById('root')!).render(
	<RootProvider>
		<App />
	</RootProvider>,
);
