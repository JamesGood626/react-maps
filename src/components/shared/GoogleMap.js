import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'

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
            bootstrapURLKeys={{ key: 'AIzaSyC1vM_i3LrNhL1pFrXvw4iP2BX7X8dETC8' }}
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
