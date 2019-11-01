import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TouchableHighlight, Modal, Image, PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { CameraKitGalleryView } from 'react-native-camera-kit';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pickerSelection: 'Default value!',
      pickerDisplayed: false,
      cameraImage: null,
      images: []
  };
}

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }
    
  choosePhoto() {
    ImagePicker.openPicker({ 
      multiple: true,
    }).then(images => {
      this.setState({
      images: images.map(image => {
        return {uri: image.path};
      })
    })}
    );
  }

  async renderImages() {
    const checkStoragePermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    if (checkStoragePermission === PermissionsAndroid.RESULTS.GRANTED) {
        alert("You've access for the gallery");
    } else {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    'title': 'Image Picker App required Gallery permission',
                    'message': 'We required gallery permission ' +
                        'Please grant us.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              <CameraKitGalleryView
              ref={gallery => this.gallery = gallery}
              style={{flex: 1, marginTop: 20}}
              minimumInteritemSpacing={10}
              minimumLineSpacing={10}
              columnCount={3}
              selectedImages={this.state.images}
              onTapImage={event => {
                console.log(event);
              }}/>
            } else {
                alert("You don't have access for the gallery");
            }
        } catch (err) {
            alert(err)
        }
    }
    // if (PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE) === PermissionsAndroid.RESULTS.GRANTED) {
    //   />
    // } else {
    //   console.log("something went wrong");
    // }
  }
    
  takePhoto() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
  }).then(image => {
    console.log(image.path);
    this.setState({ cameraImage: image.path });
  });
  }
    
  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue
    })
    if (newValue === 'gallery') this.choosePhoto();
    else this.takePhoto();
    this.togglePicker();
  }

//   renderItem(item) {
//     console.log("item: " + item.uri);
//     return (
//         <TouchableOpacity  
//             style={{flex:1/3,
//             aspectRatio:1}}>
//             <Image style={{flex: 1}} resizeMode='cover' source={{ uri: item.uri }}></Image>
//         </TouchableOpacity>
//     )
// }

  render() {
    const pickerValues = [
      {
        title: 'Gallery',
        value: 'gallery'
      },
      {
        title: 'Camera',
        value: 'camera'
      },
    ]
    
    return(
      <View style={styles.container}>
        { this.state.cameraImage ? <Image source={{ uri: this.state.cameraImage }} style={{ height: 400, width: 400}} /> : null }
        { this.state.images.length > 0 ? this.renderImages() : null}
        <TouchableOpacity style={styles.button} onPress={() => this.togglePicker()}>
          <Text style={styles.buttonText}>Choose Photo</Text>
        </TouchableOpacity>
        <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
          <View style={styles.pickerStyle}>
            <Text>Please pick a value</Text>
            { pickerValues.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  <Text>{ value.title }</Text>
                </TouchableHighlight>
            })}
            <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: 40,
    width: 200,
    padding: 5,
    borderRadius: 5,
    bottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  pickerStyle: {
    margin: 20,
    padding: 20,
    backgroundColor: '#efefef',
    bottom: 0,
    left: 20,
    right: 20,
    alignItems: 'center',
    position: 'absolute'
  }
});