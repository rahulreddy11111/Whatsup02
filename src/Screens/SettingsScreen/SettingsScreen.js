// import React from 'react';
// import { View, Button, Alert } from 'react-native';
// import { Auth } from 'aws-amplify';

// const SettingsScreen = () => {
//   const signOut = async () => {
//     try {
//       await Auth.signOut();
//       Alert.alert('Signed out successfully!');
//     } catch (error) {
//       console.log('Error signing out: ', error);
//       Alert.alert('Error signing out. Please try again.');
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={signOut} title="Sign Out" />
//     </View>
//   );
// };

// export default SettingsScreen;
