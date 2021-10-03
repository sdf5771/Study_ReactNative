import React from 'react';
import { Text, View } from 'react-native';
import MyButton from './src/components/MyButton';

const App = () => {
    return(
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    marginBottom: 10,
                }}
            >
                My Button Component - Props
            </Text>
            {/* <MyButton title="Button"/>
            <MyButton title="Button2">Children Props </MyButton>
            <MyButton title="Button3">Children Props 2</MyButton>
            <MyButton />     */}
            <MyButton title="Button" onPress={() => alert('props')}/>
            <MyButton title="Button" onPress={() => alert('children')}>
                Children Props
            </MyButton>
            <MyButton onPress={() => alert('default')}/>
        </View>
    );
};

export default App;