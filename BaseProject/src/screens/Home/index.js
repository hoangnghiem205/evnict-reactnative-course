import * as React from "react";
import {
    Container, Header, Content, Input, Label, Body, Title, Button, Text,
    Picker, Form, Item as FormItem
} from 'native-base';
import OneSignal from 'react-native-onesignal';


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
            selected1: "key1"
        };

        // Setting enableVibrate
        OneSignal.enableVibrate(true);



        // Setting enableSound
        OneSignal.enableSound(true);


        // Example, always display notification in shade.
        OneSignal.inFocusDisplaying(2);
    }   


    componentWillMount() {
        // nhận được khi có notify đến app
        OneSignal.addEventListener('received', this.onReceived); 
        // nhận được khi người dùng ấn vào notify và app được mở ra
        OneSignal.addEventListener('opened', this.onOpened);
        // nhận được khi app đăng ký thành công với OneSignal
        OneSignal.addEventListener('registered', this.onRegistered);
        // nhận thông tin device
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('registered', this.onRegistered);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    }

    onRegistered(notifData) {
        console.log("Device had been registered for push notifications!", notifData);
    }

    onIds(device) {
        console.log('Device info: ', device);
    }


    render() {
        return (
            <Container>
                <Header >
                    <Body>
                        <Title>OneSignal Demo</Title>
                    </Body>
                </Header>
                <Content>

                </Content>
            </Container>
        );
    }
}

export default Home;
