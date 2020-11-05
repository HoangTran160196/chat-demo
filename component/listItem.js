import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Icon } from 'react-native-elements';

export function ListItem({ containerStyle, mainLogo, type, children, onPressHandler, isChecked }) {
  const { mainLogoComponent, mainLogoMarginRight } = mainLogo;
  const {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginBottom,
    height,
    backgroundColor,
    borderBottomWidth,
    borderColor
  } = containerStyle;

  const styles = StyleSheet.create({
    containerStyle: {
      margin: 0,
      paddingTop: paddingTop,
      paddingRight: paddingRight,
      paddingBottom: paddingBottom,
      paddingLeft: paddingLeft,
      marginBottom: marginBottom,
      height: height,
      backgroundColor: backgroundColor,
      borderBottomWidth: borderBottomWidth,
      borderColor: borderColor,
      flexDirection: "row",
      flex: 1
    },
    mainLogoStyles: {
      height: '100%',
      width: height - (2 * paddingTop) - borderBottomWidth,
      borderRadius: 30,
      marginRight: mainLogoMarginRight
    },
    mainContentStyles: {
      flex: 1,
      height: '100%',
      marginLeft: 10,
    },
    checkboxStyles: {
      margin: 0,
      padding: 0,
      marginLeft: 0,
      backgroundColor: 'transparent',
      borderWidth: 0,
      borderRadius: 50
    }
  });

  let onPress = onPressHandler;
  
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: "center" }}>
      <View style={styles.containerStyle}>
        <View style={styles.mainLogoStyles}>
          {mainLogo && mainLogoComponent}
        </View>
        <View style={styles.mainContentStyles}>
          {children}
        </View>
        <View style={{ alignSelf: "center", border: 1, borderRadius: 50 }}>
          {type === 'navigation' && <Image source={require('../assets/img/Vector.png')} />}
          {type === 'label' && <Image source={require('../assets/img/emailIcon.png')} />}
          {type === 'radio' &&
            <CheckBox
              onPress={onPress}
              checked={isChecked}
              checkedIcon={<Icon name='check-circle' size={35} type='font-awesome' color='#1ACE77' />}
              uncheckedIcon={<Icon name='circle-thin' size={35} type='font-awesome' color='#BDBDBD' />}
              containerStyle={styles.checkboxStyles}
            />
          }
        </View>
      </View>
    </TouchableOpacity>
  );
}