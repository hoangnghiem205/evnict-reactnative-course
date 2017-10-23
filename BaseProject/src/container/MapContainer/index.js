// @flow
import * as React from "react";
import Map from "../../screens/Map";
export interface Props {
  navigation: any,
}
export interface State { }
export default class MapContainer extends React.Component {


  render() {
    return (
      <Map navigation={this.props.navigation} />
    );
  }
}