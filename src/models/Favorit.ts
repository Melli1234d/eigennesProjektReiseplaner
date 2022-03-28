import { Destination } from '@models/Destination';


export enum FavoritePreference {
	Heart = 'HEART',
	Thumb = 'THUMB',
}

export interface FavoriteDestination extends Destination{
	favorite: FavoritePreference;
}

export interface Favorite {
	favoriteSelection: FavoritePreference | undefined;
	destinationResults: FavoriteDestination[];
}