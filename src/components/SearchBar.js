// components/SearchBar.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Picker } from '@react-native-picker/picker';

const Drawer = createDrawerNavigator();

const FilterScreen = ({ onFilter }) => {
    const [filterType, setFilterType] = useState('');
    const [priceRange, setPriceRange] = useState('');

    const applyFilters = () => {
        onFilter(filterType, priceRange);
    };

    return (
        <View style={styles.drawerContent}>
            <Text style={styles.drawerTitle}>Filter Options</Text>

            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Select Type</Text>
                <Picker
                    selectedValue={filterType}
                    style={styles.picker}
                    onValueChange={(itemValue) => setFilterType(itemValue)}
                >
                    <Picker.Item label="All" value="" />
                    <Picker.Item label="Vegetarian" value="vegetarian" />
                    <Picker.Item label="Non-Vegetarian" value="non-vegetarian" />
                </Picker>
            </View>

            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Select Price Range</Text>
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
            </View>

            <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
                <Text style={styles.buttonText}>Apply Filters</Text>
            </TouchableOpacity>
        </View>
    );
};

const MainScreen = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Search for food..."
                    placeholderTextColor="gray"
                />
                <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                    <Ionicons name="search" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const SearchBar = ({ onSearch, onFilter }) => {
    return (
        <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen name="Main">
                {() => <MainScreen onSearch={onSearch} />}
            </Drawer.Screen>
            <Drawer.Screen name="Filters">
                {() => <FilterScreen onFilter={onFilter} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#121212',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    searchButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#1e90ff',
        borderRadius: 10,
    },
    drawerContent: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    drawerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    pickerContainer: {
        marginBottom: 20,
    },
    picker: {
        backgroundColor: 'white',
        color: 'black',
    },
    applyButton: {
        padding: 10,
        backgroundColor: '#1e90ff',
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SearchBar;
