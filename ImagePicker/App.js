import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, Dimensions, Platform, PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { CameraKitGalleryView } from 'react-native-camera-kit';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: {},
      selectionComplete: false,
      croppedImage: null
  };
}

componentWillMount() {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Picker App Gallery Permission',
          message:
            'Image Picker App needs access to your gallery ',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the gallery');
      } else {
        console.log('gallery permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
}

  renderImages() {
    if (!this.state.selectionComplete) 
    return (<CameraKitGalleryView
                ref={gallery => this.gallery = gallery}
                style={{flex: 1, marginTop: 20}}
                minimumInteritemSpacing={10}
                minimumLineSpacing={10}
                columnCount={3}
                selectedImages={Object.keys(this.state.images)}
                onTapImage={event => {
                  const uri = event.nativeEvent.selected;
                  console.log("Tapped on an image: " + uri);
                  if (this.state.images[uri]) {
                    delete this.state.images[uri];
                } else {
                    this.state.images[uri] = true;
                }
                this.setState({ images: { ...this.state.images } });
              }
            }/>
    );
  }

  showFullImage(item) {
    ImagePicker.openCropper({
        path: `file://${item}`
    })
    .then(image => {
        this.setState({ croppedImage: image });
    })
    .catch(e => {
        console.log(e);
    });
  }

  showCroppedImage() {
    const { croppedImage } = this.state;
    return (
        croppedImage && (
            <Image
                source={{ uri: croppedImage.path }}
                style={{
                    width: Dimensions.get('window').width - 32,
                    height: Dimensions.get('window').width,
                    marginTop: 16,
                    marginLeft: 16
                }}
            />
        )
    );
}

  renderSelectedImages() {
    const selectedImages = Object.keys(this.state.images);
    return (
      <View style={{ flex: 1,
      margin: 5 }}>
        <FlatList
        numColumns={3}
          data={selectedImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{ flex: 1/3, aspectRatio: 1}}
            onPress={() => this.showFullImage(item)}>
            <Image
              source={{
                uri: `file://${item}`
              }}
              style={{
                height: 100,
                width: 100,
                overflow: "visible",
                marginLeft: index > 0 ? 16 : 0
              }}
            />
          </TouchableOpacity>
        )}
      />
      </View>
    )
  }

  renderDoneButton() {
    return (<TouchableOpacity
        style={[styles.button, { bottom: 10 }]}
        onPress={() => this.setState({ selectionComplete: true })}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    );
  }

render() {
  return (
    <View style={styles.container}>
      {this.renderImages()}
      { Object.keys(this.state.images).length > 0 && !this.state.selectionComplete ? 
      this.renderDoneButton() : null }
      {this.state.selectionComplete && this.renderSelectedImages()}
      {this.showCroppedImage()}
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: 40,
    width: 200,
    padding: 5,
    borderRadius: 5,
    bottom: 60,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});