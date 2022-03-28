import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LocationPreference, Quiz, TemperaturePreference } from '@models/Quiz';
import { Destination } from '@models/Destination';
import { allDestinations } from '@constants/destinations';

const initialState: Quiz = {
	questionOne: undefined,
	destinationResults: [],
	questionTwo: undefined
};

const calculateDestinations = (
	locationPreference: LocationPreference | undefined,
	temperaturePreference: TemperaturePreference | undefined
) => {
	const filteredDestinations: Destination[] = allDestinations
		.filter((destination) => {
			if (
				locationPreference == LocationPreference.Mountain &&
				destination.hasMountain
			) {
				return true;
			}
			if (
				locationPreference == LocationPreference.Ocean &&
				destination.hasOcean
			) {
				return true;
			}
			if (
				locationPreference == LocationPreference.City &&
				destination.hasCity
			) {
				return true;
			}
			return locationPreference == undefined;
		})
		.filter((destination) => {
			if (
				temperaturePreference == TemperaturePreference.Hot &&
				destination.temperature == TemperaturePreference.Hot
			) {
				return true;
			}
			if (
				temperaturePreference == TemperaturePreference.Cold &&
				destination.temperature == TemperaturePreference.Cold
			) {
				return true;
			}
			return temperaturePreference == undefined;
		});
	return filteredDestinations;
};
export const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		setLocationPreference: (
			state,
			action: PayloadAction<LocationPreference>
		) => {
			state.questionOne = action.payload;
			state.destinationResults = calculateDestinations(
				state.questionOne,
				state.questionTwo
			);
		},
		removeDestination:(
			state,
			action: PayloadAction<Destination>
) => {
			const index = state.destinationResults.findIndex(element => element.name == action.payload.name);
			if (index > -1) {
				state.destinationResults.splice(index, 1);
			} console.log (index)

		},


		setTemperaturePreference: (
			state,
			action: PayloadAction<TemperaturePreference>
		) => {
			state.questionTwo = action.payload;
			state.destinationResults = calculateDestinations(
				state.questionOne,
				state.questionTwo
			);
		}
	}
});

// Action creators are generated for each case reducer function
export const { setLocationPreference, setTemperaturePreference, removeDestination } =
	quizSlice.actions;


export default quizSlice.reducer;
