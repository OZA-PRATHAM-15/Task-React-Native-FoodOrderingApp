import React, { useState } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import FoodItem from '../components/FoodItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = () => {
    const foods = useSelector((state) => state.food.foods); // Assuming foods are stored in Redux
    const [filteredFoods, setFilteredFoods] = useState(foods);
    const [query, setQuery] = useState('');
    const [filterType, setFilterType] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [showFilters, setShowFilters] = useState(false); // State to toggle filter visibility

    // Search logic
    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        const searchResult = foods.filter((food) =>
            food.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFoods(searchResult);
    };

    // Filter logic
    const applyFilters = () => {
        let result = foods;

        // Filter by type
        if (filterType) {
            result = result.filter((food) => food.type === filterType);
        }

        // Filter by price range
        if (priceRange === 'below_10') {
            result = result.filter((food) => food.price < 10);
        } else if (priceRange === '10_20') {
            result = result.filter((food) => food.price >= 10 && food.price <= 20);
        } else if (priceRange === 'above_20') {
            result = result.filter((food) => food.price > 20);
        }

        setFilteredFoods(result);
        setShowFilters(false); // Hide filters after applying
    };

    // Clear filters and reset
    const clearFilters = () => {
        setFilterType('');
        setPriceRange('');
        setFilteredFoods(foods); // Reset to original food list
        setShowFilters(false); // Hide filters after clearing
    };

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for food..."
                    placeholderTextColor="gray"
                    value={query}
                    onChangeText={handleSearch}
                />
                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => setShowFilters(!showFilters)} // Toggle filter visibility
                >
                    <Ionicons name="filter-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Filter Section (Visible only when showFilters is true) */}
            {showFilters && (
                <View style={styles.filterContainer}>
                    <Text style={styles.label}>Filter by Type</Text>
                    <Picker
                        selectedValue={filterType}
                        style={styles.picker}
                        onValueChange={(itemValue) => setFilterType(itemValue)}
                    >
                        <Picker.Item label="All" value="" />
                        <Picker.Item label="Vegetarian" value="vegetarian" />
                        <Picker.Item label="Non-Vegetarian" value="non-vegetarian" />
                    </Picker>

                    <Text style={styles.label}>Filter by Price</Text>
                    <Picker
                        selectedValue={priceRange}
                        style={styles.picker}
                        onValueChange={(itemValue) => setPriceRange(itemValue)}
                    >
                        <Picker.Item label="All" value="" />
                        <Picker.Item label="Below $10" value="below_10" />
                        <Picker.Item label="$10 - $20" value="10_20" />
                        <Picker.Item label="Above $20" value="above_20" />
                    </Picker>

                    {/* Apply and Clear Filters */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
                            <Text style={styles.buttonText}>Apply Filters</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clearButton} onPress={clearFilters}>
                            <Text style={styles.buttonText}>Clear Filters</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {/* Food List */}
            <FlatList
                data={filteredFoods}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <FoodItem food={item} />}
                ListEmptyComponent={() => (
                    <Text style={styles.noResultsText}>No food items match your search/filter.</Text>
                )}
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
    },
    filterButton: {
        padding: 10,
        backgroundColor: '#1e90ff',
        borderRadius: 10,
    },
    filterContainer: {
        backgroundColor: '#202020',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    picker: {
        backgroundColor: '#ffffff',
        color: '#000',
        marginVertical: 10,
    },
    label: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginVertical: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    applyButton: {
        flex: 1,
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
    },
    clearButton: {
        flex: 1,
        backgroundColor: '#ff6347',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    noResultsText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default HomeScreen;
