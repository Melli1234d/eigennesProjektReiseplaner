// jest.config.js

module.exports = {
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*/*.test.{js,jsx,ts,tsx}',
		'!src/**/*/*.spec.{js,jsx,ts,tsx}',
		'!src/**/*/*.d.ts',
		'!src/**/*/types.ts'
	],
	preset: 'jest-expo',
	restoreMocks: true,
	clearMocks: true,
	resetMocks: true,
	snapshotResolver: './__snapshots__/snapshotResolver.js',
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/plugins/'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)'
	],
	verbose: true
};
