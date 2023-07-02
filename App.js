import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View  } from 'react-native';
import ImageSource from './components/ImageSource';
import Button from './components/button';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';
const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
  const [pickedEmoji, setPickedEmoji] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(True)
    } else {
      alert('You did not select any image.');
    }
  };
  const onReset = ()=>{
    setShowAppOptions(false)
  }
  const onAddSticker = () => {
    setIsModalVisible(true)
  };

  const onSaveImageAsync = async () => {
 
  };
  const onModalClose = () =>{
    setIsModalVisible(false)
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageSource 
        placeholderImageSource={PlaceholderImage} 
        selectedImage={selectedImage} />
                {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
        </View>
      {showAppOptions ? (
             <View style={styles.optionsContainer}>
             <View style={styles.optionsRow}>
               <IconButton icon="refresh" label="Reset" onPress={onReset} />
               <CircleButton onPress={onAddSticker} />
               <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
             </View>
           </View>
      ):(
     
     <View style={styles.footerContainer}>
      <Button theme='primary' label='choose a photo' onPress={pickImageAsync}/>
      <Button label='use a photo' onPress={()=>setShowAppOptions(true)} />
     </View>
     )}  
     <EmojiPicker  isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex: 1,
    padding: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
