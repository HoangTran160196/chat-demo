import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { ListItem } from '../component/listItem.js'

const logo = {
  select: require('../assets/img/settings/switchphonenumber/phone-select.png'),
  unselect: require('../assets/img/settings/switchphonenumber/phone-unselect.png')
}

const SwitchPhoneNumber = () => {
  const [data, setData] = useState([
    {
      id: 1,
      phonenumber: "(+84) 36896545",
      address: "Tphcm",
      isSelected: true,
    },
    {
      id: 2,
      phonenumber: "(+84) 36896545",
      address: "Ha Noi",
      isSelected: false,
    },
    {
      id: 3,
      phonenumber: "(+84) 36896545",
      address: "Can Tho",
      isSelected: false,
    }
  ]);

  const onPressHandler = function (id) {
    console.log('11onPressHandler', id);
    const newData = data.map(e => {
      if(e.id != id)
        e.isSelected = false;
      else 
        e.isSelected = true;
      return e;
    });

    setData(newData);
  }

  return (
    <View>
      <FlatList
        data={data}
        extraData={data}
        renderItem={({ item }) => {
          return (<ListItem
            item={item}
            containerStyle={
              {
                height: 80,
                paddingTop: 16,
                paddingRight: 17,
                paddingBottom: 16,
                paddingLeft: 17,
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderColor: '#F2F2F2'
              }
            }
            mainLogo={{
              mainLogoComponent: <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
                <Image source={require('../assets/img/settings/switchphonenumber/phone-background.png')} resizeMode="contain" style={{ position: 'absolute', height: '100%' }} />
                <Image source={item.isSelected ? logo.select : logo.unselect} resizeMode="contain" style={{ flex: 1 }} />
              </View>,
              mainLogoMarginRight: 12
            }}
            onPressHandler={() => onPressHandler(item.id)}
            type={'radio'}
            isChecked={item.isSelected}>
            <Text style={{ fontWeight: "bold", flex: 1, fontSize: 18, color: item.isSelected ? '#333333' : '#B0B0B0', textAlignVertical: 'center' }}>{item.phonenumber}</Text>
            <Text style={{ flex: 1, color: item.isSelected ? '#808080' : '#B0B0B0' }}>{item.address}</Text>
          </ListItem>)
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default SwitchPhoneNumber;