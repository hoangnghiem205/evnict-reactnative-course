import * as React from "react";
import {
    Container,
    Header,
    Body,
    Title,
    Content,
    Text,
    Button,
} from "native-base";

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
                    <Button onPress={() => this.props.onLogin()}>
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Login;
