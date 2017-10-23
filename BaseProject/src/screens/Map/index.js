import * as React from "react";
import { Container, Header, Body, Left, Icon, Title, Button, Content, Form, Item, Input, Label, Right } from 'native-base';
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';

import flagImg from '../../assets/images/flag-blue.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;


import styles from "./styles";
export interface Props {
    navigation: any
}
export interface State { }
class Map extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
            },
        };
    }

    render() {
        return (
            
                    <View style={styles.container}>
                        <MapView
                            provider={this.props.provider}
                            style={styles.map}
                            initialRegion={this.state.region}
                            loadingEnabled
                            loadingIndicatorColor="#666666"
                            loadingBackgroundColor="#eeeeee"
                        >
                            {/* <MapView.Marker
                                coordinate={{
                                    latitude: LATITUDE + SPACE,
                                    longitude: LONGITUDE + SPACE,
                                }}
                                centerOffset={{ x: -18, y: -60 }}
                                anchor={{ x: 0.69, y: 1 }}
                                image={flagImg}
                            /> */}
                            <MapView.Marker
                                coordinate={{
                                    latitude: LATITUDE - SPACE,
                                    longitude: LONGITUDE - SPACE,
                                }}
                                centerOffset={{ x: -42, y: -60 }}
                                anchor={{ x: 0.84, y: 1 }}
                            >
                                <MapView.Callout>
                                    <View>
                                        <Text>This is a plain view</Text>
                                    </View>
                                </MapView.Callout>
                            </MapView.Marker>
                        </MapView>
                        <View style={styles.buttonContainer}>
                            <View style={styles.bubble}>
                                <Text>Map with Loading</Text>
                            </View>
                        </View>
                    </View>
                
        );
    }
}

Map.propTypes = {
    provider: MapView.ProviderPropType,
};

export default Map;
