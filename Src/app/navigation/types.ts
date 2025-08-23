export type RootStackParamList = {
  promotion: undefined;
  login: undefined;
  forgotpassword: undefined;
  forgotpasswordnext: undefined;
  register: undefined;
  registernext: undefined;
  mainmenu: undefined;
  contact: undefined;
  profile: undefined;
  about: undefined;
  bireyselSiparis: undefined;
  bireyselOnKabul: undefined;
  kargoTakip: undefined;
  enYakinPtt: undefined;
  postaKodu: undefined;
  gonderiHesapla: undefined;
  enYakinKargomat: undefined;
  kargomatGonderileri: undefined;
  kargomatHakkinda: undefined;
  nasilKullanirim: undefined;
  aldigimUrunler: undefined;
  dahaFazla: undefined;
  duyurular: undefined;
  filatelikUrunler: undefined;
  telgrafIslemleri: undefined;
  dahaFazlaTelgraf: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
