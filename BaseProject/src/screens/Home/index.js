import * as React from "react";
import {
    Container, Header, Content, Input, Label, Body, Title, Button,
    Picker, Form, Item as FormItem, Grid, Col, CardItem
} from 'native-base';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';


import styles from "./styles";
export interface Props {
    navigation: any;
    list: any;
}
export interface State { }

const Item = Picker.Item;
class Home extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            selected1: 1
        };

    }
    onValueChange(item){
        console.log("onValueChange", item);
        this.setState({selected1: item});
    }

    render() {
        return (
            <Container>
                <Header >
                    <Body>
                        <Title>Picker Demo</Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
                        <Picker
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Item label="Wallet" value={1}  key={1}/>
                            <Item label="ATM Card" value={2}  key={2}/>
                            <Item label="Debit Card" value={3} key={3}/>
                            <Item label="Credit Card" value={4} key={4}/>
                            <Item label="Net Banking" value={5} key={5}/>
                        </Picker>
                </Content>
            </Container>
        );
    }
}

export default Home;
