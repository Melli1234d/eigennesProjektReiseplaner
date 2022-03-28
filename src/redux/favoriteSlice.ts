import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LocationPreference, Favorite, TemperaturePreference } from '@models/Quiz';
import { Destination } from '@models/Destination';
import { allDestinations } from '@constants/destinations';
import { FavoriteDestination, FavoritePreference } from '@models/Favorit';

const initialState: Favorite = {
	favoriteSelection: undefined,
	destinationResults: [],

};



const calculateDestinations = (
	favoritePreference: FavoritePreference | undefined,

) => {
	const filteredDestinations: Destination[] = allDestinations
		.filter((destination) => {
			if (
				favoritePreference == FavoritePreference.Heart
			) {
				return true;
			}
			return favoritePreference == undefined;
		})
		.filter((destination) => {
			if (
				favoritePreference == FavoritePreference.Thumb

			) {
				return false;
			}

			return favoritePreference == undefined;
		});
	return filteredDestinations;
};



export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavoriteDestination: (
			state,
			action: PayloadAction<FavoriteDestination>
		) => {

			state.destinationResults .push (action.payload);
		},
	}
});

// Action creators are generated for each case reducer function
export const { addFavoriteDestination} = favoriteSlice.actions;


export default favoriteSlice.reducer;