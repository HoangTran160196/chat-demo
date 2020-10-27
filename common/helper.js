const STATUS = {
    SCHEDULE: 'SCHEDULE',
    IN_PROCESS: 'IN PROCESS',
    COMPLETE: 'COMPLETE'
}

const THEME = {
    SENDER: 'SENDER',
    RECEIVER: 'RECEIVER'
}


export function getStatusTheme(status) {
    let backgroundColorTheme, icon;
    switch (status.toUpperCase()) {
        case STATUS.SCHEDULE:
            backgroundColorTheme = { backgroundColor: 'rgb(14, 149, 246)' }
            icon = 'ios-information-circle'
            break
        case STATUS.IN_PROCESS: 
            backgroundColorTheme = { backgroundColor: 'rgb(0, 213, 235)' }
            icon = 'ios-information-circle-outline'
            break
        case STATUS.COMPLETE:
            backgroundColorTheme = { backgroundColor: 'rgb(26, 213, 77)' }
            icon = 'ios-list-box'
            break
    }
    return { backgroundColorTheme, icon }
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