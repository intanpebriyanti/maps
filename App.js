import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.178546,
          longitude: 114.994288
        },
        title: 'Krisna Funtasstic Land',
        subtitle: 'Temukus, Banjar, Kabupaten Buleleng, Bali 81152'
      },
      {
        key:2,
        latlng: {
          latitude:-8.117137,
          longitude: 115.091080
        },
        title: 'Taman Kota Singaraja',
        subtitle: 'Jl. Ngurah Rai, Kecamatan Buleleng, Banjar Jawa, Banjar Jawa Kecamatan Buleleng, Banjar Jawa, Kec. Buleleng, Kabupaten Buleleng, Bali 81117'
      },
      {
        key:3,
        latlng: {
          latitude:-8.103525,
          longitude: 115.088958
        },
        title: 'Pelabuhan Buleleng',
		subtitle: 'Jl. Pelabuhan Buleleng, Kp. Bugis, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Tempat Rekreasi di Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Intan Pebriyanti</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#f50057',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#f50057',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
