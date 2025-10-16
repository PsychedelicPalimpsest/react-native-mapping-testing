import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

import { View } from "react-native";

import MapComponent from '@/components/map';

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
export default function TabTwoScreen() {
  return <View style={styles.container}>
    <MapComponent />
      </View>
}

