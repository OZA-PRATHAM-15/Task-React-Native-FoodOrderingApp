import { createSlice } from '@reduxjs/toolkit';
// redux/foodSlice.js
const initialFoods = [
    { id: 1, name: 'Pizza', type: 'vegetarian', price: 15 },
    { id: 2, name: 'Burger', type: 'non-vegetarian', price: 10 },
    { id: 3, name: 'Salad', type: 'vegetarian', price: 8 },
    { id: 4, name: 'Sushi', type: 'non-vegetarian', price: 20 },
    { id: 5, name: 'Pasta', type: 'vegetarian', price: 12 },
    { id: 6, name: 'Steak', type: 'non-vegetarian', price: 25 },
];


const foodSlice = createSlice({
    name: 'food',
    initialState: {
        foods: initialFoods,
        watchlist: [],
        savedFoods: [],
    },
    reducers: {
        addToWatchlist: (state, action) => {
            state.watchlist.push(action.payload);
        },
        saveFood: (state, action) => {
            state.savedFoods.push(action.payload);
        },
    },
});

export const { addToWatchlist, saveFood } = foodSlice.actions;
export default foodSlice.reducer;
