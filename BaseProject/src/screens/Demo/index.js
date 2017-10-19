import * as React from "react";
import { Container, Header, Body, Left,Icon, Title, Button, Text, Content, Form, Item, Input, Label, Right } from 'native-base';

import styles from "./styles";
export interface Props {
    navigation: any,
}
export interface State { }
class Demo extends React.Component<Props, State> {

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

                    <Button style={styles.mt} block>
                        <Text>DEMO</Text>
                    </Button>

                </Content>
            </Container>


        );
    }
}

export default Demo;
