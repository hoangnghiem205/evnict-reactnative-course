import * as React from "react";
import {
    Container,
    Header,
    Body,
    Left,
    Right,
    Icon,
    Title,
    Content,
    Text,
    Button,
} from "native-base";

import styles from "./styles";
export interface Props {
    navigation: any,
}
export interface State { }
class Detail extends React.Component<Props, State> {
    render() {
        const param = this.props.navigation.state.params;
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                    </Left>

                    <Body style={{ flex: 3 }}>
                        <Title>{param ? param.contact.item.name : "Detail"}</Title>
                    </Body>

                    <Right />
                </Header>
                <Content>
                    <Text>{param.contact.item.phonenumber}</Text>
                </Content>
            </Container>
        );
    }
}

export default Detail;
