import React from "react";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ latitude, longitude } = this.props) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div>
      <div className=" mb-12">
        <div className=" font-semibold text-lg 2sm:text-base">Map Location</div>
        <div className=" h-72 w-4/5 md:w-full border-2 rounded-md">
          <GoogleMapReact
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            bootstrapURLKeys={{
                key: "AIzaSyDUx47K5VH9pRZ2b-uQVFBBNRJZNa03fTc"
            }}
          >
            <AnyReactComponent
              lat={latitude}
              lng={longitude}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};
export default Map;
