import { Destination } from '@models/Destination';
import { TemperaturePreference } from '@models/Quiz';

export const allDestinations: Destination[] = [
	{
		name: 'Venedig',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Venedig.png'),
		hasOcean: true,
		hasCity: false,
		hasMountain: false,
		link: 'VenedigDetailScreen',
		temperature: TemperaturePreference.Hot
	},
	{
		name: 'Mykonos',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Mykonos.png'),
		hasOcean: true,
		hasCity: false,
		hasMountain: false,
		link: 'MykonosDetailScreen',
		temperature: TemperaturePreference.Hot
	},
	{
		name: 'Barcelona',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Barcelona.png'),
		hasOcean: true,
		hasCity: false,
		hasMountain: false,
		link: 'BarcelonaDetailScreen',
		temperature: TemperaturePreference.Hot
	},
	{
		name: 'Miami Beach',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Miami_Beach.png'),
		hasOcean: true,
		hasCity: false,
		hasMountain: false,
		link: 'MiamiBeachDetailScreen',
		temperature: TemperaturePreference.Hot
	},
	{
		name: 'Mombasa',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Mombasa.png'),
		hasOcean: true,
		hasCity: false,
		hasMountain: false,
		link: 'MombasaDetailScreen',
		temperature: TemperaturePreference.Hot
	},

	{
		name: 'Madeira',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Madeira.png'),
		hasOcean: true,
		hasCity: false,
		hasMountain: false,
		link: 'ModeiraDetailScreen',
		temperature: TemperaturePreference.Cold
	},
	{
		name: 'Vancouver',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Vancouver.png'),
		hasOcean: true,
		hasCity: false,
		hasMountain: false,
		link: 'VancouverDetailScreen',
		temperature: TemperaturePreference.Cold,
	},
	{
		name: 'Belgien',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Belgien.png'),
		hasOcean: true,
		hasCity: false,
		hasMountain: false,
		link: 'BelgienDetailScreen',
		temperature: TemperaturePreference.Cold,
	},
	{
		name: ' Rügen',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Rügen.png'),
		hasOcean: true,
		hasCity: false,
		hasMountain: false,
		link: 'RügenDetailScreen',
		temperature: TemperaturePreference.Cold,
	},
	{
		name: ' Kenia',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Kenia.png'),
		hasOcean: false,
		hasCity: false,
		hasMountain: true,
		link: 'KeniaDetailScreen',
		temperature: TemperaturePreference.Hot
	},
	{
		name: 'Jamaika',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Jamaika.png'),
		hasOcean: false,
		hasCity: false,
		hasMountain: true,
		link: 'JamaikaDetailScreen',
		temperature: TemperaturePreference.Hot
	},
	{
		name: 'Bieszczady',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Bieszczady.png'),
		hasOcean: false,
		hasCity: false,
		hasMountain: true,
		link: 'BieszczadyDetailScreen',
		temperature: TemperaturePreference.Cold,
	},
	{
		name: 'Salalah',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Salalah.png'),
		hasOcean: false,
		hasCity: true,
		hasMountain: false,
		link: 'SalalahDetailScreen',
		temperature: TemperaturePreference.Hot
	},
	{
		name: '  Budapest',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Budapest.png'),
		hasOcean: false,
		hasCity: true,
		hasMountain: false,
		link: 'BudapestDetailScreen',
		temperature: TemperaturePreference.Cold
	},
	{
		name: '  Singapur',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Singapur.png'),
		hasOcean: false,
		hasCity: true,
		hasMountain: false,
		link: 'SingapurDetailScreen',
		temperature: TemperaturePreference.Hot
	},
	{
		name: ' Paris',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Paris.png'),
		hasOcean: false,
		hasCity: true,
		hasMountain: false,
		link: 'ParisDetailScreen',
		temperature: TemperaturePreference.Cold
	},
	{
		name: '  Rotterdamm',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Rotterdamm.png'),
		hasOcean: false,
		hasCity: true,
		hasMountain: false,
		link: 'RotterdammDetailScreen',
		temperature: TemperaturePreference.Cold,
	},
	{
		name: '  Amsterdamm',
		text: 'Lorem ipsum dolor sit amet, consetetur',
		image: require('@assets/images/Amsterdamm.png'),
		hasOcean: false,
		hasCity: true,
		hasMountain: false,
		link: 'AmsterdamDetailScreen',
		temperature: TemperaturePreference.Cold,
	}
];
