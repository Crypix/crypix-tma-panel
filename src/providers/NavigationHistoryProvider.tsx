import { createContext, useContext, useState, useEffect, ReactElement } from 'react';
import { useLocation, type Location } from 'react-router-dom';

const NavigationHistoryContext = createContext<Location[]>([]);

const useNavigationHistory = (): Location[] => useContext(NavigationHistoryContext);

const usePreviousLocation = (): Location | null => {
	const context = useContext(NavigationHistoryContext);
	return context[context.length - 1] ?? null;
};

const NavigationHistoryProvider = ({ children }: { children: ReactElement }) => {
	const [history, setHistory] = useState<Location[]>([]);
	const location = useLocation();

	useEffect(() => {
		setHistory((prevHistory) => {
			if (prevHistory.length > 10) {
				return [...prevHistory, location].slice(1);
			}
			return [...prevHistory, location];
		});
	}, [location]);

	return <NavigationHistoryContext.Provider value={history}>{children}</NavigationHistoryContext.Provider>;
};

export { NavigationHistoryProvider, usePreviousLocation, useNavigationHistory };
