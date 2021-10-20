import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const EventInput = () => {

    const [text, setText] = useState('');
    const _onChange = event => setText(event.nativeEvent.text);
    const _onChangeText = text => setText(text);
    return(
        <View>
            <Text style={{margin:10, fontsize:30}}>Text: {text}</Text>
            <TextInput
            style={{ borderWidth: 1, padding: 10, fontsize: 20 }}
            placeholder="Enter a Text...."
            //onChange={_onChange}
            onChangeText={_onChangeText}
            />
        </View>
    );
};

export default EventInput;