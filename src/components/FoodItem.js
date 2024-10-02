// components/FoodItem.js
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addToWatchlist, saveFood } from '../redux/foodSlice';

const FoodItem = ({ food }) => {
    const dispatch = useDispatch();

    return (
        <Card style={{ margin: 10, backgroundColor: '#1e1e1e' }}>
            <Card.Content>
                <Text style={{ fontSize: 18, color: 'white' }}>{food.name}</Text>
                <Text style={{ color: 'gray' }}>Type: {food.type}</Text>
                <Text style={{ color: 'gray' }}>Price: ${food.price}</Text>
            </Card.Content>
            <Card.Actions>
                <Button mode="contained" onPress={() => dispatch(addToWatchlist(food))}>Add to Watchlist</Button>
                <Button mode="outlined" onPress={() => dispatch(saveFood(food))}>Save for Later</Button>
            </Card.Actions>
        </Card>
    );
};

export default FoodItem;
