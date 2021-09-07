import * as Linking from 'expo-linking';

export default {
	prefixes: [Linking.makeUrl('/')],
	config: {
		// For deep-linking, this maps a nav-state to an url
		screens: {
			Root: {}, //TODO: Fix Deep-Link config
			NotFound: '*'
		}
	}
};
