import { StyleSheet } from 'react-native';
import { View } from "react-native";

import MapComponent from '@/components/map';

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
export default function HomeScreen() {
  return (<View style={styles.container}>
    <MapComponent />
      </View>);
}



