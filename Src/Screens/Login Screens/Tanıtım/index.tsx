import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../../Assets/images';
import icons from '../../../Assets/icons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { RouterNames } from '../../../Config';
import type { StackNavigationProp } from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type RootStackParamList = {
  Login: undefined;
};

const Tanıtım = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <LinearGradient
      colors={['#FFC629', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.6, 1]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.TopContainer}>
          <View style={styles.CloseButtonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate(RouterNames.Login)}
            >
              <icons.Kapatma width={wp('7%')} height={wp('7%')} />
            </TouchableOpacity>
          </View>
          <View style={styles.TopMassageContainer}>
            <Text style={styles.TopMassageText}>
              PTT UYGULAMALARI{'\n'}ARTIK TEK ÇATI ALTINDA !
            </Text>
          </View>
        </View>
        <View style={styles.ImageContainer}>
          <Image style={styles.Image} source={images.Tanıtım} />
        </View>
        <View style={styles.BottomContainer}>
          <View style={styles.BottomPartContainer}>
            <View style={styles.YellowBar}></View>
          </View>
          <Text style={styles.BottomText}>
            PTT Kargo, Filateli, Telgraf ve Kargomat{'\n'} uygulamaları artık
            tek uygulamada birleşti.{'\n'} Kargo takibi, telgraf gönderme,
            filatelik{'\n'} ürün satın alma, kargomat işlemleri gibi bir{'\n'}
            çok işlem tek uygulamada hizmetinizde.
          </Text>
          <View style={styles.BottomPartContainer}>
            <View style={styles.YellowBar}></View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Tanıtım;
