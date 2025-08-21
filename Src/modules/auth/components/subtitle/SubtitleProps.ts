export type AuthSubtitleType = 'login' | 'forgot' | 'verificationSubtitle';

export interface SubtitleProps {
  type: AuthSubtitleType; 
}

export const SUBTITLE_KEY_BY_TYPE: Record<AuthSubtitleType, string> = {
  login: 'login',
  forgot: 'forgot',
  verificationSubtitle: 'verificationSubtitle',
};
