import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  Marker,
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';

const GoogleMapComponent = ({ lat, lng, isMarkerShown }) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat, lng }}>
    {isMarkerShown && <Marker position={{ lat, lng }} />}
  </GoogleMap>
);

GoogleMapComponent.propTypes = {
  isMarkerShown: PropTypes.bool,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

GoogleMapComponent.defaultProps = {
  isMarkerShown: true,
};

const ComposedGoogleMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `175px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(GoogleMapComponent);

export default ComposedGoogleMapComponent;
