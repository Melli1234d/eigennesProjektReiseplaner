import { ImageSourcePropType } from 'react-native';

import { TemperaturePreference } from '@models/Quiz';

export interface Destination {
	name: string;
	text: string;
	image: ImageSourcePropType;
	hasOcean: boolean;
	hasMountain: boolean;
	hasCity: boolean;
	link: string;
	temperature: TemperaturePreference;
}
