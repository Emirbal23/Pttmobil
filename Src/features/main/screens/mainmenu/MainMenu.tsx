import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import { ScreenBackground } from '@/shared/components/screenbackground/ScreenBackground';
import colors from '@/shared/theme/color';
import styles from './style';
import { useImageSlider } from './hooks';
import icons from '@/assets/icons';
import { MainCard, BottomBar } from '../../components';
const MainMenu = () => {
  const { pagerRef, page, setPage, slides } = useImageSlider();

  return (
    <ScreenBackground variant="main">
      <View style={styles.imageContainer}>
        <PagerView
          ref={pagerRef}
          style={StyleSheet.absoluteFill}
          initialPage={0}
          scrollEnabled
          onPageSelected={(e: {
            nativeEvent: { position: React.SetStateAction<number> };
          }) => setPage(e.nativeEvent.position)}
        >
          {slides.map((src, idx) => (
            <View key={idx} style={{ flex: 1 }}>
              <Image
                source={src}
                style={{ width: '100%', height: '100%' }}
                resizeMode="stretch"
              />
            </View>
          ))}
        </PagerView>

        <View style={styles.stepperOutContainer}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: colors.grey900,
              opacity: 0.75,
            }}
          />
          <View style={styles.stepperContainer}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.stepper,
                  {
                    backgroundColor:
                      i === page ? colors.secondary : colors.grey200,
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.searchbarContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.searchbar}>
          <Text style={styles.searchbarText}>Hızlı Kargo Takibi</Text>
          <TouchableOpacity style={styles.barkodContainer}>
            <icons.pttbarkod width={30} height={30}></icons.pttbarkod>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <MainCard kind="Kargo" />
      <MainCard kind="Filateli" />
      <MainCard kind="Telgraf" />
      <MainCard kind="Kargomat" />
      <BottomBar />
    </ScreenBackground>
  );
};

export default MainMenu;
