import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SectionList,
  SafeAreaView,
} from 'react-native';
import { ListItem } from 'react-native-elements';

export function single_Book({route, navigation}) {
    var books = require('./books.json');
    const {book, place, test} =  route.params;
      var new_test = books.The_New_Testament_books.split(",");
      var old_test = books.The_Old_Testament_books.split(",");
      var capts = [];
      
    if(test === "New Testament")
    {
      
      for(i =0; i < new_test[place]; i++)
      {
        capts[i] = i + 1;
      }
      
    }else if( test === "Old Testament")
    {
      for(i =0; i < old_test[place]; i++)
      {
        capts[i] = i + 1;
      }
    
    }
  
  return (
    <SafeAreaView style={styles.chapter_container}>
      <FlatList
        data={capts}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.chapter_item}>
            <TouchableOpacity>
              <Text style={styles.chapter_title}>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={index => index.toString()}
      />
    </SafeAreaView>
  );
}
export function bible({navigation}) {
const [book, setBook] = useState(""); 
keyExtractor = (item, index) => index.toString()

renderItem = ({ item,section, index }) => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <ListItem.Title>{item}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
)

    var books = require('./books.json');
    const new_Test_Books = books.The_New_Testament;
    const old_Test_Books = books.The_Old_Testament;
    const new_Testament = new_Test_Books.split(",");
    const old_Testament = old_Test_Books.split(",");
    const DATA = [
  {
    title: "Old Testament",
    data: old_Testament,
  },
  {
    title: "New Testament",
    data: new_Testament,
  },
];
const Item = ({ one_book ,test, place}) => (
  <View style={styles.item}>
    <TouchableOpacity
        onPress={() => {setBook(one_book), navigation.navigate('Bible', { book: one_book, place, test})}}
    >
        <Text style={styles.chapters}>{one_book}</Text>
     </TouchableOpacity>
  </View>
);
  return (
    <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item , section, index}) => <Item one_book={item} test={section.title}  place={index} />}
                        renderSectionHeader={({section: { title } }) =>
                         (<Text style={styles.header}>{title}</Text>)}
                    />
                </View>
            </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
    height: '100%',
    backgroundColor: '#fff',
    width: '100%',
    padding:20

  },
  title:{
      fontSize: 20,
      fontWeight: 'bold',
  },
  item: {
    backgroundColor: "#C5C5C5",
    padding: 15,
    marginVertical: 3 
  },
  header: {
    fontSize: 25,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  chapters:{
      fontSize: 18,
  },
  // chapter
  chaptercontainer:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  chaptertxt_cont:{
    flex: 1, 
    flexDirection: 'column', 
    margin: 1
  },
  chapter_txt:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  // chapter
  chapter_container: {
    flex: 1,
  },
  chapter_item: {
    backgroundColor: '#D3D3D3',
    flex: 1, 
    flexDirection: 'column', 
    margin: 1, 
    paddingTop: 50
  },
  chapter_title: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    height: 80,
  },
});