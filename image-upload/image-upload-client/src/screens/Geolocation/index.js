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
            error: null
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var jsonPosition = JSON.stringify(position);
                this.setState({
                    initialPosition: jsonPosition
                },
            (error)=>{
                console.log(error);
            }, {
                enableHighAccuracy: true,
                timeut: 30 * 1000,
                maximumAge: 1000
            });
            }
        );

        this.watchID = navigator.geolocation.watchPosition(
            (position) => {
                var jsonPosition = JSON.stringify(position);
                this.setState({
                    lastPosition: jsonPosition
                },
            (error)=>{
                console.log(error);
            }, {
                enableHighAccuracy: true,
                timeut: 30 * 1000,
                maximumAge: 1000
            });
            }
        );

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
                            <Text> {this.state.initialPosition} </Text>
                            <Text style={styles.title}>initialPosition: </Text>
                            <Text> {this.state.lastPosition} </Text>
                        </Text>
                        {/* <Text>
                            <Text style={styles.title}>Current position: </Text>
                            <Text style={styles.title}>latitude : {this.state.lastPosition}</Text>
                        </Text> */}
                    </View>
                </Content>
            </Container>


        );
    }
}

export default Geolocation;
