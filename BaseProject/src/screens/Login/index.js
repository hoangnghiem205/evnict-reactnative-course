import * as React from "react";
import { Container, Header, Body, Title, Button, Text, Content, Form, Item, Input, Label } from 'native-base';

import styles from "./styles";
export interface Props {
    navigation: any,
    onLogin: Function,
}
export interface State { }
class Login extends React.Component<Props, State> {
    
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button style={styles.mt} block onPress={() => this.props.onLogin()}>
                        <Text>Login</Text>
                    </Button>

                </Content>
            </Container>


        );
    }
}

export default Login;
