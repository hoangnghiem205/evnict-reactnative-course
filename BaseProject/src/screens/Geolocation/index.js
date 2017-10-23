import * as React from "react";
import { Container, Header, Body, Left, Icon, Title, Button, Content, Form, Item, Input, Label, Right } from 'native-base';
import { View, Text } from 'react-native';
import styles from "./styles";
export interface Props {
    navigation: any,
    onRequest: Function
}
export interface State { }
class Geolocation extends React.Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            initialPosition: 'unknown',
            lastPosition: 'unknown',
            error: null,
        };
    }

    componentDidMount() {
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         var initialPosition = JSON.stringify(position);
        //         this.setState({ initialPosition });
        //     },
        //     (error) => alert(error.message),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        // );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({
                lastPosition: lastPosition
            });
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Body>
                        <Title>Geolocation</Title>
                    </Body>
                </Header>
                <Content>
                    <View>
                        <Text>
                            <Text style={styles.title}>Initial position: </Text>
                            {this.state.initialPosition}
                        </Text>
                        <Text>
                            <Text style={styles.title}>Current position: </Text>
                            <Text style={styles.title}>latitude : {this.state.lastPosition}</Text>
                        </Text>
                    </View>
                </Content>
            </Container>


        );
    }
}

export default Geolocation;
