import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';

const DATA = [
  {
    id: 'öge1',
    title: 'Birinci liste öğesi',
  },
  {
    id: 'öge2',
    title: 'İkinci liste öğesi',
  },
  {
    id: 'öge3',
    title: 'Üçüncü liste öğesi',
  },
  {
    id: 'öge4',
    title: 'Dördüncü liste öğesi',
  },
  {
    id: 'öge5',
    title: 'Beşinci liste öğesi',
  },
  {
    id: 'öge6',
    title: 'Altıncı liste öğesi',
  },
];

const ListItem = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>
      {'Bunlar benim Flatlistlerim'}
    </Text>
  </View>
);

const FlatListWithHeader = () => {
  return (
    <FlatList
      data={DATA}
      ListHeaderComponent={() => (
        <View style={styles.scrollView}>
          <Text style={styles.text}>
            {'Bu scrollview normalde çalışıyor! Ancak aynı sayfada "FlatList" ve "ScrollView" kullanmak uyumsuzluklara neden oluyor.'}
          </Text>
        </View>
      )}
      renderItem={({ item }) => <ListItem title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatListWithHeader />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#62E1DC',
    padding: 30,
    marginVertical: 15,
    marginHorizontal: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    backgroundColor: 'red',
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 100,
  },
});

export default App;
