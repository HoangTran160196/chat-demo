import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BroadCastButton from './BroadCastButton.js'
import BroadCastDropdown from './BroadCastDropdown.js'
import DateTimePicker from '@react-native-community/datetimepicker'
import { getDate, formatTime } from '../../../common/helper.js'

const IMAGE = {
    RADIO_CHECKED: require('../../../assets/img/radio_checked.svg'),
    RADIO_UNCHECKED: require('../../../assets/img/radio_unchecked.svg'),
    CALENDAR: require('../../../assets/img/calendar_24.svg'),
    TIME: require('../../../assets/img/time_24.svg'),
}

const DATETIME_PICKER_MODE = {
    DATE: 'date',
    TIME: 'time'
}


export default function BroadCastTimeSetting(props) {
    // timeSettingButtonChoosen = true => sent late button is choosen, 
    // ortherwise sent now is choosen
    const [timeSettingButtonChoosen, chooseTimeSettingKind] = useState(false)
    const [date, setDate] = useState(null);
    const [mode, setMode] = useState(DATETIME_PICKER_MODE.DATE);
    const [show, setShow] = useState(false);
    const { style } = props

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        date == null && setDate(new Date())
        mode === DATETIME_PICKER_MODE.DATE ? setShow(!show) : showMode(DATETIME_PICKER_MODE.DATE)
    };

    const showTimepicker = () => {
        date == null && setDate(new Date())
        mode === DATETIME_PICKER_MODE.TIME ? setShow(!show) : showMode(DATETIME_PICKER_MODE.TIME)
    };

    const toggleTimeSetting = () => {
        setDate(null)
        setShow(false)
        chooseTimeSettingKind(!timeSettingButtonChoosen)
    }

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.header}>Time Setting</Text>
            <View style={styles.dottedSeparator}></View>
            <BroadCastButton 
                title='Send Now'
                iconChecked={IMAGE.RADIO_CHECKED}
                iconUnchecked={IMAGE.RADIO_UNCHECKED}
                containerStyle={styles.marginTop16}
                isButtonPressed={!timeSettingButtonChoosen}
                onPress={() => toggleTimeSetting()}
            />
            <BroadCastButton 
                title='Send Later'
                iconChecked={IMAGE.RADIO_CHECKED}
                iconUnchecked={IMAGE.RADIO_UNCHECKED}
                containerStyle={styles.marginTop16}
                isButtonPressed={timeSettingButtonChoosen}
                onPress={() => toggleTimeSetting()}
            />
            <BroadCastDropdown 
                style={[styles.marginTop16, styles.paddingHorizontal16]}
                label='Date'
                icon={IMAGE.CALENDAR}
                placeholder='mm/dd/yyyy'
                title={date && getDate(date)}
                enable={timeSettingButtonChoosen}
                hasError={true}
                textError='Please input the contact number'
                isRequired={true}
                onPress={() => showDatepicker()}
            />
            <BroadCastDropdown 
                style={[styles.marginTop16, styles.paddingHorizontal16]}
                label='Time'
                icon={IMAGE.TIME}
                placeholder='-- : --   --'
                title={date && formatTime(date)}
                enable={timeSettingButtonChoosen}
                hasError={true}
                textError='Please input the contact number'
                isRequired={true}
                onPress={() => showTimepicker()}
            />
            {(show && timeSettingButtonChoosen) && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    header: {
        fontFamily: 'Lato_700Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#333333'
    },
    dottedSeparator: {
        borderColor: '#BDBDBD',
        borderWidth: 0.5,
        borderStyle: 'dashed',
        borderRadius: 1, // add radius => work in android
        marginTop: 12,
    },
    marginTop16: {
        marginTop: 16
    },
    paddingHorizontal16: {
        paddingHorizontal: 16,
    }
})