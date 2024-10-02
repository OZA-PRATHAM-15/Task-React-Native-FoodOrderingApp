# Food Ordering App

This is a React Native app that allows users to browse food items, add them to a watchlist, and filter items by type (Vegetarian/Non-Vegetarian) and price range. The app also includes a search functionality to search for food items by name.

## Features

- Search for food items by name.
- Filter by food type (Vegetarian/Non-Vegetarian).
- Filter by price range.
- Add items to the watchlist.
- Save items for later.

## Video demo

[![Watch the video](https://miro.medium.com/v2/resize:fit:915/1*is_n9D4_T21bg5TbBYKW7Q.jpeg)(https://www.youtube.com/watch?v=Qu2B3K8vy7o&ab_channel=PRATHAMOZA)]

---

## Installation and Setup

### Prerequisites

- Node.js (version 14.x or above)
- React Native CLI
- Android Studio / Xcode for iOS (or Expo CLI if using Expo)
- A code editor like VSCode

### Steps

#### 1. Clone the repository

```bash
git clone https://github.com/your-repo/food-ordering-app.git
cd food-ordering-app
```

Here is the complete README.md file converted into proper .md format:

md
Copy code

# Food Ordering App

This is a React Native app that allows users to browse food items, add them to a watchlist, and filter items by type (Vegetarian/Non-Vegetarian) and price range. The app also has a search functionality to search for food items by name.

## Features

- Search for food items.
- Filter by food type (Vegetarian/Non-Vegetarian).
- Filter by price range.
- Add items to the watchlist.
- Save items for later.

## Installation and Setup

### Prerequisites

- Node.js (version 14.x or above)
- React Native CLI
- Android Studio / Xcode for iOS (or Expo CLI if using Expo)
- A code editor like VSCode

### 1. Clone the repository

```bash
git clone https://github.com/your-repo/food-ordering-app.git
cd food-ordering-app
```

### 2. Install dependencies

```bash
Copy code
npm install
```

### 3. Set up Android/iOS environments

```
Make sure you have Android Studio (for Android) or Xcode (for iOS) installed and configured. Alternatively, you can use Expo for easier setup.
```

- For Android:

```
Ensure you have an emulator set up in Android Studio or use a physical device.
```

### 4.Optional: Clear Cache

If you run into issues during setup, try clearing the cache:

```bash
npx react-native start --reset-cache
```

## How to Use

- Search for Food: Use the search bar at the top of the home page to - search for food items by name.
- Filter by Type and Price: Press the filter button to show filter - options, where you can filter by type (Vegetarian/Non-Vegetarian) or - price range.
- Watchlist & Save: You can add items to your watchlist or save them for later by clicking the respective buttons on the food item card.
- Video Demonstration
- Watch the video demonstration:

## Troubleshooting

- If you encounter any issues, try the following steps:

- Ensure that all dependencies are installed by running npm install again.
  - If using iOS, make sure you have the correct version of Xcode installed and run:
    ```bash
    cd ios && pod install
    ```
    - If issues persist, try clearing the Metro bundler cache with:
      ```bash
      npx react-native start --reset-cache
      ```
