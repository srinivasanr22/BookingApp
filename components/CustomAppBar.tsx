// components/Layout.tsx
import { Colors } from '@/constants/Colors';
import { usePathname, useRouter, useSegments } from 'expo-router';
import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

interface LayoutProps {
  children: ReactNode;
}

const CustomAppBar: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname(); // e.g., /profile
  const segments = useSegments(); // ['profile']

  const route = segments.length > 1 ? segments[segments.length - 1] : '';
  const showBack = pathname !== '/';
  
  const routeTitles: Record<string, string> = {
    index: 'Home',
    profile: 'Profile',
    settings: 'Settings',
    about: 'About Us',
  };

  const title = routeTitles[route] || capitalize(route);

  function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={[styles.header]}>
        {showBack ? (
          <Appbar.BackAction size={18} onPress={() => router.back()} color={Colors.whiteColor} />
        ) : (
          <View>
             <Appbar.Action icon="menu" size={24} color={Colors.whiteColor} onPress={() => console.log('Menu')} />
             {/* <MaterialCommunityIcons name="bell-outline" size={24} color={Colors.whiteColor} /> */}
          </View>
        )}
        <Appbar.Content title={title} titleStyle={styles.titleStyle}/>
      </Appbar.Header>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primaryColor,
    elevation: 5,
    height: 70,
    color: Colors.whiteColor,
    borderBottomRightRadius: 27.5,
    borderBottomLeftRadius: 27.5,
    boxShadow: 'none',
  },
  content: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  titleStyle: {
    color: Colors.whiteColor, 
    fontSize: 16
  },
});
