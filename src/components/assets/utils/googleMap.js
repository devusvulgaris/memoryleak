import styles from '../theme/googleMap';

export default {
  defaultZoom: 3,
  defaultOptions: {
    styles,
    mapTypeControl: false,
    streetViewControl: false,
    maxZoom: 15,
    minZoom: 3,
  },
  defaultCenter: {
    lat: 60.15562,
    lng: 24.9425,
  },
};
