const STATUS = {
    SCHEDULE: 'SCHEDULE',
    IN_PROCESS: 'IN PROCESS',
    COMPLETE: 'COMPLETE'
}

const THEME = {
    SENDER: 'SENDER',
    RECEIVER: 'RECEIVER'
}

const COLOR = {
    SCHEDULE: '#4B91FC',
    IN_PROCESS: '#1BD2ED',
    COMPLETE: '#55D435'
}

const IMAGE_STATE = {
    COMPLETE: require('../assets/img/completed.png'),
    IN_PROGRESS: require('../assets/img/inProgress.png'),
    CALENDAR: require('../assets/img/calendar.png'),
}

export function getStatusTheme(status) {
    let color, backgroundColor, borderColor, icon;
    switch (status.toUpperCase()) {
        case STATUS.SCHEDULE:
            borderColor = { borderColor: COLOR.SCHEDULE }
            backgroundColor = { backgroundColor: COLOR.SCHEDULE }
            color = { color: COLOR.SCHEDULE }
            icon = IMAGE_STATE.CALENDAR
            break
        case STATUS.IN_PROCESS: 
            borderColor = { borderColor: COLOR.IN_PROCESS }
            backgroundColor = { backgroundColor: COLOR.IN_PROCESS }
            color = { color: COLOR.IN_PROCESS}
            icon = IMAGE_STATE.IN_PROGRESS
            break
        case STATUS.COMPLETE:
            borderColor = { borderColor: COLOR.COMPLETE }
            backgroundColor = { backgroundColor: COLOR.COMPLETE }
            color = { color: COLOR.COMPLETE}
            icon = IMAGE_STATE.COMPLETE
            break
    }
    return { color, backgroundColor, borderColor, icon }
}



export function getStyleFromTheme(theme) {
    let backgroundColor, justifyContent, marginRight, marginLeft
    switch (theme) {
        case THEME.SENDER:
            backgroundColor = {backgroundColor: 'rgb(232, 232, 232)'}
            justifyContent = {justifyContent: 'flex-end'}
            marginRight = {marginRight: 16}
            break
        case THEME.RECEIVER:
            backgroundColor = {backgroundColor: 'rgb(216, 238, 254)'}
            justifyContent = {justifyContent: 'flex-start'}
            marginRight = {marginLeft: 16}
            break
    }
    return { backgroundColor, justifyContent, marginRight, marginLeft }
}