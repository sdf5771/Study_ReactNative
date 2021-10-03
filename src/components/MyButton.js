import React from 'react';
import { TouchableOpacity, Text, View, TouchableOpacityBase } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = props => {
  console.log(props);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#3498db',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}

      //onPress={() => alert('Click!!!')}
      onPress={() => props.onPress()}
    >

        <Text style= {{ color: 'white', fontSize: 24 }}>
          {props.children || props.title}
          </Text>
    </TouchableOpacity>
  );
};

//여러 사람과 협업을 통해 개발할 경우 다른 사람이 컴포넌트를 잘못 파악해서
//번두시 전달되어야 하는 중요한 값이 전달되지 않았을 때, 사용할 기본 값을
//아래의 코드처럼 default로 props를 지정할 수 있다.
MyButton.defaultProps = {
  title: 'My Default Button',
};

//PropsTypes 라이브러리를 이용한 데이터형 타입 에러메시지 출력
//협업을 통한 개발을 할 경우 다른 개발자가 데이터형 입력을 실수할 경우 이를 에러메시지로 출력하여 알려준다.
MyButton.propTypes = {
  title : PropTypes.string.isRequired,
  //name : PropTypes.string.isRequired,
  onPress : PropTypes.func.isRequired,
};

export default MyButton;

