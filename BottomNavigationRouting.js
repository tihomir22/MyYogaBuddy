import {
  BottomNavigation,
  Text,
  Button,
  Appbar,
  List,
  IconButton,
  MD3Colors,
} from "react-native-paper";
import { useState } from "react";
import { FlatList, Image, StyleSheet, View, Dimensions } from "react-native";
const ScanRoute = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Image
          style={{
            width: 256,
            height: 256,
            borderRadius: 20,
            border: "1px solid gray",
            alignSelf: "center",
          }}
          source={require("./assets/scan-img.jpeg")}
        />
        <Text>Start scanning by clicking one of the buttons below!</Text>
      </View>
      <View style={{ display: "flex", gap: "10px", width: 250 }}>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Take from camera
        </Button>
        <Button
          icon="camera"
          mode="elevated"
          onPress={() => console.log("Pressed")}
        >
          From gallery
        </Button>
      </View>
    </View>
  );
};

const CatalogRoute = () => {
  const DATA = [
    { id: "1", image: require("./assets/scan-img.jpeg") },
    { id: "2", image: require("./assets/scan-img.jpeg") },
    { id: "3", image: require("./assets/scan-img.jpeg") },
    { id: "4", image: require("./assets/scan-img.jpeg") },
    { id: "5", image: require("./assets/scan-img.jpeg") },
  ];

  function _handleSearch() {}
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Class details" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
      </Appbar.Header>
      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {DATA.map((item, index) => {
          return (
            <Image
              key={index}
              source={item.image}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                border: "1px solid gray",
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const HistoryRoute = () => (
  <View>
    <Appbar.Header>
      <Appbar.Content title="Scanning history" />
    </Appbar.Header>
    <View style={{ paddingHorizontal: 20 }}>
      <List.Item
        title="First Item"
        description="Item description"
        right={(props) => (
          <View style={{display:"flex",flexDirection:'row'}}>
            <IconButton
              icon="camera"
              size={20}
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              icon="camera"
              size={20}
              onPress={() => console.log("Pressed")}
            />
          </View>
        )}
        left={(props) => (
          <Image
            source={require("./assets/scan-img.jpeg")}
            style={{
              width: 50,
              height: 50,
              border: "1px solid gray",
            }}
          />
        )}
      />

      <List.Item
        title="First Item"
        description="Item description"
        right={(props) => (
          <View style={{display:"flex",flexDirection:'row'}}>
            <IconButton
              icon="camera"
              size={20}
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              icon="camera"
              size={20}
              onPress={() => console.log("Pressed")}
            />
          </View>
        )}
        left={(props) => (
          <Image
            source={require("./assets/scan-img.jpeg")}
            style={{
              width: 50,
              height: 50,
              border: "1px solid gray",
            }}
          />
        )}
      />
    </View>
  </View>
);

const BottomNavigationRouting = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "scan",
      title: "Favorites",
      focusedIcon: "camera",
      unfocusedIcon: "camera-outline",
    },
    {
      key: "catalog",
      title: "Catalog",
      focusedIcon: "view-gallery",
      unfocusedIcon: "view-gallery-outline",
    },
    { key: "history", title: "History", focusedIcon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    scan: ScanRoute,
    catalog: CatalogRoute,
    history: HistoryRoute,
  });

  return (
    <BottomNavigation
      style={{ width: "100%" }}
      sceneAnimationEnabled={true}
      sceneAnimationType={"shifting"}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationRouting;
