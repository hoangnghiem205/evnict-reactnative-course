import * as React from "react";
import { Container, Header, Body, Left, Icon, Title, Button, Text, Content, Form, Item, Input, Label, Right } from 'native-base';

import MapView from 'react-native-maps';

import styles from "./styles";
export interface Props {
    navigation: any
}
export interface State { }
class Map extends React.Component<Props, State> {

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Body>
                        <Title>Demo</Title>
                    </Body>
                </Header>
                <Content>


                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        region={this.state.region}
                    >
                        <MapView.Marker
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    </MapView>


                </Content>
            </Container>


        );
    }
}

export default Map;
