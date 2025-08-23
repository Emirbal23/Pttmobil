export type AuthSubtitleType = 'login' | 'forgot' | 'verificationSubtitle';

export interface SubtitleProps {
  type: AuthSubtitleType;
}

export const SUBTITLE_KEY_BY_TYPE: Record<AuthSubtitleType, string> = {
  login: 'ui.login',
  forgot: 'ui.forgot',
  verificationSubtitle: 'ui.verificationSubtitle',
};
