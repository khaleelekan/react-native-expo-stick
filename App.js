import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View  } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/button';

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
     </View>
     <View style={styles.footerContainer}>
      <Button theme='primary' label='choose a photo'/>
      <Button label='use a photo'/>
     </View>
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
});
