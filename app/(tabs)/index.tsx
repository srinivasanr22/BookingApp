import CardView from '@/components/CardView';
import Spinner from '@/components/Spinner';
import { Colors } from '@/constants/Colors';
import listData from '@/mock-json/listMock.json';
import { listProps } from '@/types/CommonTypes';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from "react-native";


export default function HomeScreen() {
  // local component state.
  const [search, setSearch] = useState<string | null>('');
  const [dataList, setDataList] = useState<listProps[] | null>([]);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  // onload action.
  useEffect(() => {
   setDataList(listData);
  },[]);


  const renderItem = ({ item, navigation } : any) => <CardView data={item} 
  onPress={() => navigation.navigate('Detail', { item })} />

  return (
    <View style={styles.container}>
      <Spinner showSpinner={showSpinner} />
      {
        !showSpinner && <View>
          {/* <TextInput
            label="search"
            onChangeText={text => setSearch(text)}
            style={styles.input}
            activeOutlineColor={Colors.whiteColor}
          /> */}
          <FlatList
            data={dataList}
            renderItem={ renderItem }
            keyExtractor={item => item.matchID}
          />
      </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  input: {
    backgroundColor: Colors.whiteColor,
    borderColor: Colors.whiteColor,
    borderBottomColor: Colors.primaryColor,
  },
});