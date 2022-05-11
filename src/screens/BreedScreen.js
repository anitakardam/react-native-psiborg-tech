import React, {Component} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import {Card, Searchbar} from 'react-native-paper';

function BreeedScreen() {
  const breeds = [
    {
      id: 1,
    
      name: 'Hariana',
      image: require('../../assets/Images/cow2.png'),
    },
    {
      id: 2,
    
      name: 'Jersey',
      image: require('../../assets/Images/cow1.png'),
    },
    {
      id: 3,
    
      name: 'Hariana',
      image: require('../../assets/Images/cow2.png'),
    },
    {
      id: 4,
    
      name: 'Jersey',
      image: require('../../assets/Images/cow1.png'),
    },
    {
      id: 5,
     

      name: 'Hariana',
      image: require('../../assets/Images/cow2.png'),
    },
    {
      id: 6,
    

      name: 'Jersey',
      image: require('../../assets/Images/cow1.png'),
    },
    {
      id: 7,
   
      name: 'Hariana',
      image: require('../../assets/Images/cow2.png'),
    },
    {
      id: 8,
     

      name: 'Jersey',
      image: require('../../assets/Images/cow1.png'),
    },
    {
      id: 9,
    

      name: 'Jersey',
      image: require('../../assets/Images/cow2.png'),
    },
    {
      id: 10,
     

      name: 'Hariana',
      image: require('../../assets/Images/cow1.png'),
    },
  ];



  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      {/* <Searchbar
        placeholder="Search here"
        onChangeText={onChangeSearch}
        value={searchQuery}
      /> */}
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search here"
          placeholderTextColor={'#505050'}
        />
        {/* <Image
          style={{
            position: 'absolute',
            top: 22,
            left: 40,
          }}
          source={require('../../assets/Images/Searchhere.png')}
        /> */}
        <Image
          style={{
            position: 'absolute',
            top: 22,
            right: 40,
          }}
          source={require('../../assets/Images/search.png')}
        />
      </View>

      <ScrollView>
        <View>
          <Text style={styles.header}>Sort By : New</Text>
        </View>
        <View style={{flex: 1, padding: 15}}>
          <FlatList
            data={breeds}
            renderItem={({item}) => (
              <Card style={styles.card}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1, padding: 5, margin: 10}}>
                    {/* <Text>{item.image}</Text> */}
                    <Image source={item.image} />
                  </View>
                  <View style={{flex: 1, padding: 5, margin: 10}}>
                    <Text style={styles.title}>Breed Name</Text>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>

                  <View style={{padding: 5, margin: 10}}>
                    <Text style={styles.title}>No. of cows</Text>
                    <Text style={styles.name}>25</Text>
                    <TouchableOpacity>
                      <Text style={styles.btn}>View all</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: '#F7F8FD',
    borderRadius: 8,
  },
  btn: {
    color: '#47CD75',
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Calibri',
    fontStyle: 'normal',
  },
  name: {
    color: '#505050',
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    marginBottom: 15,
  },
  title: {
    color: '#858585',
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    marginBottom: 15,
  },
  header: {
    color: '#505050',
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    marginTop: 10,
    marginLeft: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    // borderColor: 'red',
    backgroundColor: '#F7F8FD',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    color: '#505050',
    width: 370,
    height: 40,
    left: 12,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Calibri',
    fontStyle: 'normal',
  },
});

export default BreeedScreen;
