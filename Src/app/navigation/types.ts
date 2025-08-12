export type RootStackParamList = {
  Tanitim: undefined;
  Login: undefined;
  ForgetPass: undefined;
  Register: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
