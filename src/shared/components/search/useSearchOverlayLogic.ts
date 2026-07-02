import React from 'react';

export type RouteItem = { label: string; route: string; keywords?: string[] };

export type UseSearchOverlayArgs = {
  i18n: { language: string; getResource: (lang: string, ns: string, key: string) => unknown };
  t: (key: string, options?: Record<string, unknown>) => string;
  navigation: { navigate: (routeName: string, ...params: unknown[]) => void };
  routes?: RouteItem[];
  q: string;
};

const normalize = (v: string, lang: string) =>
  (v || '')
    .toLocaleLowerCase(lang)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c');

export function useSearchOverlayLogic({ i18n, t, navigation, routes, q }: UseSearchOverlayArgs) {
  const keyToRoute: Record<string, string> = {
    Anasayfa: 'MainMenu',
    'Ana Sayfa': 'MainMenu',
    MainMenu: 'MainMenu',
    Iletisim: 'Contact',
    Profile: 'Profile',
    About: 'About',
    EnYakinPTT: 'EnYakinPTT',
    GonderiHesapla: 'GonderiHesapla',
    PostaKodu: 'PostaKodu',
    BireyselOnKabul: 'BireyselOnKabul',
    BireyselSiparis: 'BireyselSiparis',
    KargoTakip: 'KargoTakip',
    EnYakinKargomat: 'EnYakinKargomat',
    KargomatGonderileri: 'KargomatGonderileri',
    KargomatHakkinda: 'KargomatHakkinda',
    NasilKullanirim: 'NasilKullanirim',
    AldigimUrunler: 'AldigimUrunler',
    DahaFazla: 'DahaFazla',
    Duyurular: 'Duyurular',
    FilatelikUrunler: 'FilatelikUrunler',
    DahaFazlaTelgraf: 'DahaFazlaTelgraf',
    TelgrafIslemleri: 'TelgrafIslemleri',
    Hakkimizda: 'About',
    HizliKargoTakibi: 'KargoTakip',
    Kargomat: 'KargomatGonderileri',
    Kargo: 'KargoTakip',
    Filateli: 'FilatelikUrunler',
    Telgraf: 'TelgrafIslemleri',
  };

  const mainMenuRoutes = new Set(['MainMenu', 'Anasayfa', 'Ana Sayfa', 'mainmenu', 'main menu', 'home']);

  const pagesDict = i18n.getResource(i18n.language, 'translation', 'pages') as Record<string, unknown> | undefined;

  const fallbackKeys = [
    'MainMenu','Iletisim','Profile','About','GonderiHesapla','PostaKodu','BireyselOnKabul','BireyselSiparis',
    'KargoTakip','EnYakinKargomat','KargomatGonderileri','KargomatHakkinda','NasilKullanirim','AldigimUrunler',
    'DahaFazla','Duyurular','FilatelikUrunler','DahaFazlaTelgraf','TelgrafIslemleri','Hakkimizda','EnYakinPTT',
    'HizliKargoTakibi','Kargomat','Kargo','Filateli','Telgraf','Ana Sayfa','Anasayfa',
  ];

  const pageKeys: string[] = React.useMemo(() => {
    const keys = new Set<string>([...fallbackKeys, ...Object.keys(pagesDict ?? {})]);
    return Array.from(keys);
  }, [pagesDict]);

  const trLabelMap: Record<string, string> = {
    Profile: 'Profil',
    About: 'Hakkımızda',
    Iletisim: 'İletişim',
    Hakkimizda: 'Hakkımızda',
  };

  const ROUTES: RouteItem[] = React.useMemo(() => {
    return pageKeys
      .map((key) => {
        let label = t(`pages.${key}.title`, { defaultValue: key });
        if (i18n.language.startsWith('tr') && (label === 'Profile' || label === 'About' || label === key)) {
          label = trLabelMap[key] || label;
        }
        const rawKeywords = t(`pages.${key}.keywords`, { returnObjects: true, defaultValue: [] }) as unknown;
        const keywords = Array.isArray(rawKeywords) ? (rawKeywords.filter((v): v is string => typeof v === 'string')) : [];
        return { label, route: keyToRoute[key] ?? key, keywords } as RouteItem;
      })
      .filter((it) => typeof it.label === 'string' && it.label.trim().length > 0 && !mainMenuRoutes.has(it.route))
      .filter((it, idx, arr) => arr.findIndex((a) => a.route === it.route) === idx);
  }, [pageKeys, t, i18n.language]);

  const data: RouteItem[] = React.useMemo(() => {
    if (!routes || routes.length === 0) return ROUTES;
    const seen = new Set(ROUTES.map((r) => r.route));
    const extras = routes.filter((r) => !seen.has(r.route));
    return [...ROUTES, ...extras];
  }, [ROUTES, routes]);

  const filtered: RouteItem[] = React.useMemo(() => {
    const lang = i18n.language.startsWith('en') ? 'en' : 'tr';
    const nq = normalize(q, lang);
    if (!nq.trim()) return [];

    const searchData: Array<RouteItem & { _search: string }> = data.map((item) => {
      const allText = [item.label, ...(item.keywords ?? [])].join(' ');
      return { ...item, _search: normalize(allText, lang) };
    });

    const tokens = nq.split(/\s+/).filter(Boolean);
    const results = searchData.filter((item) => tokens.every((tok) => item._search.includes(tok)));

    results.sort((a, b) => {
      const aLabel = normalize(a.label, lang);
      const bLabel = normalize(b.label, lang);
      const aScore = (aLabel.startsWith(tokens[0]) ? 2 : 0) + (aLabel === nq ? 3 : 0);
      const bScore = (bLabel.startsWith(tokens[0]) ? 2 : 0) + (bLabel === nq ? 3 : 0);
      if (bScore !== aScore) return bScore - aScore;
      return a.label.localeCompare(b.label, lang);
    });

    return results;
  }, [q, data, i18n.language]);

  const onSelect = React.useCallback(
    (item: RouteItem) => {
      navigation.navigate(item.route);
    },
    [navigation],
  );

  return { data, filtered, onSelect };
}