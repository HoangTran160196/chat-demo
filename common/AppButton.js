import React from 'react';
import { StyleSheet, Button, View} from 'react-native';
import color from './Color'

export default class AppButton extends React.Component {

    render() {
        const caption = this.props.caption && this.props.caption.toUpperCase()
        const { buttonTheme, captionTheme } = this.getTheme()
        console.log(buttonTheme, captionTheme)
        return (
            <View style={[buttonTheme, captionTheme, this.props.style]}>
                <Button 
                    color="red"
                    title={caption}
                />
            </View>
        )
    }

    getTheme() {
        const { theme } = this.props
        let captionTheme, buttonTheme
        switch (theme) {
            case "Wonderful":
                captionTheme = { color: color.bianca}
                buttonTheme = { backgroundColor: color.black}
        }

        return { captionTheme, buttonTheme }
    }
    
}