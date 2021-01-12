import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as React from 'react';

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				// Splash-Screen plugin seems to not be correctly working as of expo 40
				// await SplashScreen.preventAutoHideAsync();

				// Load fonts
				await Font.loadAsync({
					...Ionicons.font,
					'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf')
				});
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				// Splash-Screen plugin seems to not be correctly working as of expo 40
				// await SplashScreen.hideAsync();
			}
		}

		void loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}