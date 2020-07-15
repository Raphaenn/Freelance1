import React, { useState, useEffect } from 'react';
import { Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from "@react-native-community/geolocation";
import { withNavigationFocus } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons";

import local from "../../assets/Point.png"
import api from "../../services/api";
import { ActivityIndicator, StyleSheet } from "react-native";
import Background from "../../components/background";

import { Container, Body, Title } from './styles';

function Places() {

  const [ loading, setloading ] = useState(true);
  const [ coordinates, setCoordinates] = useState({});
  const [ points, setPoints ] = useState([]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setCoordinates(coords);
        setloading(false);
      }
    ),
    (error) => {console.tron.log(error)},
    { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000, }
  }, []);
  
  useEffect(() => {
    async function getData() {
      try {

        const { data } = await api.get('points', {
          params: coordinates
        })

        setPoints(data);

      } catch { console.tron.log("Maps error") }
    }

    if(coordinates) getData();

  }, [coordinates]);

  function renderPoints() {
    return points.map(point => (
      <Marker 
        key={point.id}
        coordinate={{
          latitude: parseFloat(point.latitude),
          longitude: parseFloat(point.longitude),
        }}
        title={point.name}
      >
        <Image source={local} style={{}} />
      </Marker>
    ))
  }


  return (
    <Background>
      <Container>
        <Title>Lojas mais próximas</Title>
        <Body>

          { loading ? (
            <ActivityIndicator size="small" />
          ) : 
          <MapView 
            initialRegion={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.0068,
              longitudeDelta: 0.0068,
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            style={styles.map}
          >
            { renderPoints() }
          </MapView> }


        </Body>
      </Container>

    </Background>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

Places.navigationOptions = {
  tabBarLabel: 'Lojas',
  tabBarIcon: ({tintColor}) => <Icon name="room" size={20} color={tintColor} />
}

export default withNavigationFocus(Places);



