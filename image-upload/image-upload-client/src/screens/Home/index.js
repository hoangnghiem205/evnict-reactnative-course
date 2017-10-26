import * as React from "react";
import {
    Container, Header, Content, Input, Label, Body, Title, Button,
    Picker, Form, Item as FormItem, Grid, Col, CardItem
} from 'native-base';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';


import styles from "./styles";
export interface Props {
    navigation: any;
    list: any;
}
export interface State { }

const Item = Picker.Item;
class Home extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            selected1: "key1"
        };
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: response
                });
            }
        });
    }

    onUploadImage() {
        let source = this.state.avatarSource;
        const data = new FormData();
        data.append('photo', {
            uri: source.uri,
            type: source.type, // or photo.type
            name: source.fileName
        });

        this.upoad(data)
            .then((success) => {
                console.log("onUploadImage success", success);
            }
            ).catch((error) => {
                console.log("onUploadImage error", error);
            });
    }

    upoad(formdata) {
        console.log("onUploadImage:upoad to http://192.168.0.125:8000/upload data", formdata);
        return fetch('http://192.168.0.125:8000/upload', {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            },
            body: formdata
        });
    }

    render() {
        return (
            <Container>
                <Header >
                    <Body>
                        <Title>Image Demo</Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
                    <Grid style={{ alignItems: 'center' }}>
                        <Col>
                            <CardItem cardBody>
                                <Image source={this.state.avatarSource} style={{ height: 200, width: null, flex: 1, marginBottom: 10 }} />
                            </CardItem>
                            <Button style={{ marginBottom: 20 }} block primary onPress={this.selectPhotoTapped.bind(this)}><Text> Choose Image </Text></Button>
                            <Button block danger onPress={() => this.onUploadImage()}><Text> Upload Image </Text></Button>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

export default Home;
