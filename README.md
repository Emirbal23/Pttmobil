# 📦 PTT Mobil – React Native Uygulaması

Bu proje, **PTT Mobil uygulamasının** modern bir mimari ve tasarımla yeniden geliştirilmesi amacıyla oluşturulmuştur.  
Proje, **React Native + TypeScript** altyapısı ile çok dilli (TR/EN) destek, yeniden kullanılabilir bileşenler, modüler yapıda ekranlar ve gelişmiş UI/UX özellikleri sunar.  

---

## 🚀 Özellikler

- **Kimlik Doğrulama**  
  - Giriş yapma, kayıt olma, şifremi unuttum akışları  
  - 2 adımlı şifre sıfırlama (aktivasyon kodu + yeni şifre ekranı)  
  - Validasyon & i18n hata mesajları  

- **Çok Dillilik (i18n)**  
  - JSON formatında uzun vadeli sürdürülebilir dil dosyaları  
  - Anlık dil değişimi desteği  
  - TR/EN arasında dinamik geçiş  

- **Navigasyon & Drawer**  
  - **Drawer** yapısı (animasyonlu geçişler)  
  - **Daha Fazla, Telgraf İşlemleri, Kargomat, Filateli** menüleri için bağlantılar hazır  

- **Ana Menü & Alt Modüller**  
  - Ana menü ekranı (MainMenu)  
  - Alt kısımlarda **Bottom Bar + Main Card** bileşenleri  

- **Search (Arama)**  
  - SearchOverlay ve SearchOverlayView bileşenleri  
  - Yazılan dil ile eşleşen kelime algoritması  
  - %50 harf benzerliği ile gelişmiş filtreleme  

- **Shared Components**  
  - Ortak kullanılan `Button`, `Input`, `Header` vb. bileşenler  
  - Tüm sayfalarda tekrar kullanılabilir yapı  
  - Farklı senaryolara göre özelleştirilmiş varyantlar  

- **UI/UX İyileştirmeleri**  
  - Splash/Boot ekranı (iOS & Android)  
  - Yeni uygulama ikonları & launch assetleri  
  - Responsive tasarım: Tablet & telefon uyumlu  

---

## 📂 Mimari Yapı

- **modules/** → Özellik bazlı ekranlar (Auth, Cargo, Philately, Telegraph, MainMenu, vb.)  
- **shared/** → Tekrar kullanılabilir bileşenler (Input, Button, Header, Drawer, Search, Hook’lar, vb.)  
- **assets/** → İkonlar, görseller, svg/png dosyaları  
- **app/** → Navigation, app.tsx gibi yapılar

---

## ✅ Yapılanlar

- Auth ekranları (Login, Register, Reset Password) tamamlandı.  
- Drawer ve arama (Search) algoritması yazıldı ve entegre edildi.  
- MainMenu ekranı tamamlandı.
- Shared altında reusable component yapısı kuruldu.  
- i18n altyapısı kuruldu, anlık dil değişimi sağlandı.  
- Splash, app icon, safe area düzenlemeleri yapıldı.  
- Navigasyon geçişleri ve bağlantıları tamamlandı.  

---

## ❌ Eksikler

- **Hooks:**  
  - Her ekranın kendi içinde bulunan hook’lar **hooks/** altında toplanmadı.  
  - Genel kullanılan hook’lar `shared/hooks` içine taşınmalı.  

- **Kargo Modülü:**  
  - Başlangıç ekranı yapıldı, fakat eksik kısımlar tamamlanmadı.  

- **Telgraf / Kargomat / Filateli:**  
  - Navigasyon bağlantıları ve header yapısı hazır, fakat ekran içerikleri tamamen eksik.  

- **Backend Entegrasyonu:**  
  - Şu an yalnızca frontend mevcut, backend bağlantısı yapılmadı.  

- **MainCard Component:**  
  - Tasarıma birebir uyması için kod ile yapıldı.  
  - Daha temiz bir yapı için SVG/PNG varlıkları ile revize edilmeli.  

---

## 💡 Öneriler & İyileştirmeler

- **Kod Organizasyonu:**  
  - Hooks klasörleri mutlaka ortak yapıya taşınmalı.  
  - Gereksiz tekrar eden stil ve props’lar sadeleştirilmeli.  

- **UI/UX:**  
  - MainCard yeniden tasarlanmalı, görsellerle desteklenmeli.  
  - Eksik modüller tamamlanırken tasarım standardı korunmalı.  

- **Backend:**  
  - API servisleri için `services/` klasörü oluşturulmalı.  
  - Axios veya react-query ile data fetch mantığı eklenmeli.  

---

## 🔧 Kurulum & Çalıştırma

```bash
# Projeyi klonla
git clone https://github.com/Emirbal23/Pttmobil.git
cd Pttmobil

# Bağımlılıkları yükle
npm install
# veya
yarn install

# iOS için pod kur
cd ios && pod install && cd ..

# Uygulamayı başlat
npx react-native run-android
npx react-native run-ios
```
