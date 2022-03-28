import { Destination } from '@models/Destination';

export enum LocationPreference {
	Ocean = 'OCEAN',
	Mountain = 'MOUNTAIN',
	City = 'CITY'
}

export enum TemperaturePreference {
	Hot = 'HOT',
	Cold = 'COLD'
}

export interface Quiz {
	questionOne: LocationPreference | undefined;
	questionTwo: TemperaturePreference | undefined;
	destinationResults: Destination[];
}
