import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToWatchlist, saveFood } from '../redux/foodSlice';

const FoodDetailScreen = ({ route }) => {
    const { food } = route.params;
    const dispatch = useDispatch();

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 30 }}>{food.name}</Text>
            <Text>Type: {food.type}</Text>
            <Text>Price: ${food.price}</Text>
            <Button title="Add to Watchlist" onPress={() => dispatch(addToWatchlist(food))} />
            <Button title="Save for Later" onPress={() => dispatch(saveFood(food))} />
        </View>
    );
};

export default FoodDetailScreen;
