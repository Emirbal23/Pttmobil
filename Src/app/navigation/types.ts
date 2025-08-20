export type RootStackParamList = {
  promotion: undefined;
  login: undefined;
  forgotpassword: undefined;
  forgotpasswordnext: undefined;
  register: undefined;
  registernext: undefined;
  mainmenu: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
