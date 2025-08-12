export type AuthSubtitleType = 'login' | 'forget' | 'verificationSubtitle';

export interface SubtitleProps {
  type: AuthSubtitleType; 
}

export const SUBTITLE_KEY_BY_TYPE: Record<AuthSubtitleType, string> = {
  login: 'subtitleLogin',
  forget: 'forget',
  verificationSubtitle: 'verificationSubtitle',
};
