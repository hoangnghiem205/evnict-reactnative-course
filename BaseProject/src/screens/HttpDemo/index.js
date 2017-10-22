import * as React from "react";
import { Container, Header, Body, Left,Icon, Title, Button, Text, Content, Form, Item, Input, Label, Right } from 'native-base';

import styles from "./styles";
export interface Props {
    navigation: any,
    onRequest: Function
}
export interface State { }
class HttpDemo extends React.Component<Props, State> {
    constructor(props){
        super(props);
        console.log("HttpDemo:constructor", props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon
                                active
                                name="menu"
                                onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Demo</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>

                    <Button style={styles.mt} onPress={()=>{this.props.onRequest()}}>
                        <Text>DEMO</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}

export default HttpDemo;
