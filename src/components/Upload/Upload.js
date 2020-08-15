import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';
import AppNavbar from '../navigation/AppNavbar/AppNavbar'
import Icon from 'react-native-vector-icons/FontAwesome';

const Upload = ({navigation}) => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  }

  if (selectedImage !== null) {
    return (
        <React.Fragment>
            <AppNavbar navigator={navigation} title='Upload' subtitle=''/>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 2, marginTop: 20}}>
                <Button>
                    <Icon name="rocket" size={30} color="#900" />;
                </Button>
                <Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
                />
            </View>
            <View style={{flex: 1}}></View>
            </View>
        </React.Fragment>
    );
  }

  return (
    <React.Fragment>
        <AppNavbar navigator={navigation} title='Upload' subtitle=''/>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 2, marginTop: 20}}>
            <Button icon="camera" mode="outlined" onPress={openImagePickerAsync}>
            Upload Photo
            </Button>
        </View>
        <View style={{flex: 1}}></View>
        </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  /* Other styles hidden to keep the example brief... */
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Upload;