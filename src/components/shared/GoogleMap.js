import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import { GOOGLE_KEY } from '../../secrets'

export default function GoogleMap({center}) {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
    // const defaultProps = {
    //     center: {
    //         lat: lat,
    //         lng: lng
    //     },
    //     zoom: 15
    // }
    // console.log(typeof lng)
    return (
        <div style={{ height: '75vh', width: '50%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_KEY }}
            center={center}
            zoom={15}
            >
            <AnyReactComponent
                lat={40.7600473}
                lng={-73.9911963}
                text="My Marker"
            />
            </GoogleMapReact>
        </div>
    )
}
