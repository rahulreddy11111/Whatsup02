import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Navigator from './src/navigation';

// import { Amplify } from 'aws-amplify';
// import awsconfig from './src/aws-exports';
// import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

// Amplify.configure(awsconfig);
// import NotImplementedScreen from './src/Screens/NotImplementedScreen';
import Navigator from './src/navigation';




function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    flex: 1,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={{ height: '100%', width: '100%' }}>
          <Navigator />
          {/* <NotImplementedScreen/> */}
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
