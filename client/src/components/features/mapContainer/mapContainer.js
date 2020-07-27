import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "70%",
  top: "60px",
  position: "relative",
};

export class MapContainer extends Component {

  state = { showingInfoWindow: false, activeMarker: {}, selectedPlace: {} };
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  
    onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: 52.430605,
          lng: 20.718471,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"M-Tbis-bis"} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        ></InfoWindow>
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAzUS1H8u-Z79YgUnW7qJ_QcZnWSpAiT-w",
})(MapContainer);
