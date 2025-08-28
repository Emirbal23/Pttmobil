import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import React from 'react';
import styles from './style';
import { InputFactory } from '@/shared/components/inputs';
import colors from '@/shared/theme/color';
import { t } from 'i18next';
import icons from '@/assets/icons';
import { ButtonFactory } from '@/shared/components/buttons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTrackingQuery } from './hooks';

const Tracking = () => {
  const {
    selectedOption,
    setSelectedOption,
    singleValue,
    setSingleValue,
    modalVisible,
    setModalVisible,
    multiErrorLines,
    setMultiErrorLines,
    multiLines,
    setMultiLines,
    handleMultiChange,
    handleAddLine,
    handleQueryPress,
  } = useTrackingQuery({ codeLen: 6, maxLines: 10 });
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.scrollcontainer}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.optionOutContainer}>
            <View style={styles.form}>
              {/* TEKLİ SORGU SATIRI */}
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() =>
                  setSelectedOption(
                    selectedOption === 'single' ? undefined : 'single',
                  )
                }
                activeOpacity={0.9}
              >
                <Text style={styles.optionText}>
                  {t('pages.KargoTakip.singlequery')}
                </Text>
                <View
                  style={[
                    styles.radioOuter,
                    {
                      borderColor:
                        selectedOption === 'single'
                          ? colors.primary
                          : colors.grey200,
                    },
                  ]}
                >
                  {selectedOption === 'single' && (
                    <View style={styles.radioInner}>
                      <View style={styles.radioInnershadow} />
                    </View>
                  )}
                </View>
              </TouchableOpacity>

              {/* TEKLİ seçiliyse: etiket + input */}
              {selectedOption === 'single' && (
                <View>
                  <View style={styles.dashedView} />
                  <View style={styles.padding}>
                    <InputFactory
                      keyboardType="number-pad"
                      labelKey={t('pages.KargoTakip.trackingcode')}
                      kind="base"
                      placeholder={t(
                        'pages.KargoTakip.trackingcodesingleholder',
                      )}
                      value={singleValue}
                      maxLength={6}
                      onChangeText={text =>
                        setSingleValue(text.replace(/[^0-9]/g, '').slice(0, 6))
                      }
                    />
                  </View>
                </View>
              )}
              {/* KESİKLİ ÇİZGİ (daima TEKLI bloğundan sonra) */}
              <View style={styles.dashedView} />

              {/* ÇOKLU SORGU SATIRI */}
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() =>
                  setSelectedOption(
                    selectedOption === 'multi' ? undefined : 'multi',
                  )
                }
                activeOpacity={0.9}
              >
                <Text style={styles.optionText}>
                  {t('pages.KargoTakip.multiquery')}
                </Text>
                <View
                  style={[
                    styles.radioOuter,
                    {
                      borderColor:
                        selectedOption === 'multi'
                          ? colors.primary
                          : colors.grey200,
                    },
                  ]}
                >
                  {selectedOption === 'multi' && (
                    <View style={styles.radioInner}>
                      <View style={styles.radioInnershadow} />
                    </View>
                  )}
                </View>
              </TouchableOpacity>

              {/* ÇOKLU seçiliyse: etiket + çok satırlı input */}
              {selectedOption === 'multi' && (
                <View>
                  <View style={styles.dashedView} />
                  <View style={styles.padding}>
                    {multiLines.map((val, idx) => (
                      <View key={idx} style={styles.multicodeinputcontainer}>
                        {multiLines.length > 1 && (
                          <TouchableOpacity
                            onPress={() => {
                              setMultiLines(prev => {
                                const arr = [...prev];
                                arr.splice(idx, 1);
                                return arr.length === 0 ? [''] : arr;
                              });
                            }}
                            style={styles.removeLine}
                          >
                            <Text style={styles.removeText}>×</Text>
                          </TouchableOpacity>
                        )}
                        <View style={styles.linecontainer}>
                          <Text style={styles.linecount}>{idx + 1}-</Text>
                        </View>
                        <InputFactory
                          keyboardType="number-pad"
                          kind="base"
                          value={val}
                          onChangeText={text => handleMultiChange(text, idx)}
                          maxLength={6}
                          containerStyle={{
                            height: hp(5),
                            width: wp(65),
                          }}
                          placeholder={t(
                            'pages.KargoTakip.trackingcodesingleholder',
                          )}
                        />
                      </View>
                    ))}
                    {multiLines.length < 10 && (
                      <View style={styles.addlinecontainer}>
                        <TouchableOpacity
                          onPress={handleAddLine}
                          style={styles.addlinebutton}
                          activeOpacity={0.7}
                        >
                          <Text style={styles.addlinebuttontext}>
                            {t('pages.KargoTakip.addcode')}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              )}
            </View>
            <TouchableOpacity style={styles.history}>
              <Text style={styles.optionText}>
                {t('pages.KargoTakip.history')}
              </Text>
              <icons.pttarrowright width={30} height={30} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <ButtonFactory
        buttonStyle={{
          width: wp(90),
        }}
        buttoncontainerStyle={styles.ButtonContainer}
        kind="base"
        label={t('pages.KargoTakip.query')}
        onPress={handleQueryPress}
      />
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalbackground}>
          <View style={styles.modalcontainer}>
            <Text style={styles.modalsubtitle}>
              {t('pages.KargoTakip.notfound')}
            </Text>
            <Text style={styles.modaldescription}>
              {selectedOption === 'multi' && multiErrorLines.length > 0
                ? `${t('pages.KargoTakip.multinotfound')}:\n${multiErrorLines
                    .map(n => `${n}. ${t('pages.KargoTakip.code')}`)
                    .join(', ')}`
                : `${t('pages.KargoTakip.notfoundsingle')}`}
            </Text>
            <View style={styles.butonContainer}>
              <TouchableOpacity
                style={styles.buttonAgain}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.againtext}>
                  {t('pages.KargoTakip.again')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonno}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedOption(undefined);
                  setSingleValue('');
                  setMultiErrorLines([]);
                }}
              >
                <Text style={styles.buttonnoText}>
                  {t('pages.KargoTakip.giveup')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Tracking;
