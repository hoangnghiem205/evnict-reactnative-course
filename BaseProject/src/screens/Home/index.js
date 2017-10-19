import * as React from "react";
import {
    Container,
    Header,
    Left,
    Right,
    Icon,
    Body,
    Title,
    Content,
    Text,
    Button,
    List,
    ListItem,
} from "native-base";

import styles from "./styles";
export interface Props {
    navigation: any;
    list: any;
}
export interface State { }
class Home extends React.Component<Props, State> {
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
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        {this.props.list.map((item, i) => (
                            <ListItem key={i}
                                onPress={() =>
                                    this.props.navigation.navigate("Detail", {
                                        contact: { item }
                                    })}>
                                <Text>{item.username}</Text>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Home;
