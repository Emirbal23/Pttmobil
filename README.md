# PTT Mobil Yeniden Tasarım Uygulaması

Bu proje, PTT Mobil uygulamasının React Native ve TypeScript ile modern, modüler ve sürdürülebilir bir mobil uygulama mimarisiyle yeniden ele alınması amacıyla geliştirilmiştir. Çalışma; kimlik doğrulama ekranları, çok dilli yapı, drawer navigasyon, arama deneyimi, ortak bileşen sistemi ve mobil UI/UX düzenlemeleri üzerine odaklanır.

Proje, büyük ölçekli bir mobil uygulamanın ekran akışlarını daha okunabilir, tekrar kullanılabilir ve geliştirilebilir bir yapıya taşımayı hedefler.

## Öne Çıkan Özellikler

### Kimlik Doğrulama

- Giriş yapma ekranı
- Kayıt olma ekranı
- Şifremi unuttum akışı
- Aktivasyon kodu ve yeni şifre adımları
- Form validasyonları
- Çok dilli hata mesajları

### Çok Dillilik

- Türkçe ve İngilizce dil desteği
- JSON tabanlı sürdürülebilir dil dosyaları
- Anlık dil değiştirme altyapısı
- Ekran ve validasyon metinlerinde i18n kullanımı

### Navigasyon

- Drawer tabanlı menü yapısı
- Modüler ekran geçişleri
- Daha Fazla, Telgraf İşlemleri, Kargomat ve Filateli başlıkları için yönlendirme altyapısı
- Ana menü ve alt modül ekranları

### Arama Deneyimi

- SearchOverlay ve SearchOverlayView bileşenleri
- Yazılan dile göre eşleşen kelime arama mantığı
- Harf benzerliği üzerinden filtreleme yaklaşımı
- Menü ve işlem aramalarında hızlı erişim deneyimi

### Ortak Bileşenler

- Button
- Input
- Header
- Drawer bileşenleri
- Search bileşenleri
- Farklı ekranlarda tekrar kullanılabilir UI parçaları

### UI/UX Çalışmaları

- Splash/boot ekranı
- App icon ve launch asset düzenlemeleri
- Telefon ve tablet ekranlarına uyumlu responsive yapı
- Safe area düzenlemeleri
- Modüler ve okunabilir ekran organizasyonu

## Kullanılan Teknolojiler

- React Native
- TypeScript
- React Navigation
- i18n
- JavaScript
- Reusable component architecture
- Mobile UI/UX design
- Figma odaklı ekran yaklaşımı

## Proje Yapısı

```text
modules/   Feature bazlı ekranlar ve modüller
shared/    Ortak bileşenler, hook yapıları ve yardımcı parçalar
assets/    Görseller, ikonlar ve uygulama varlıkları
app/       Navigation ve uygulama giriş yapısı
```

## Tamamlanan Kısımlar

- Login, Register ve Reset Password ekranları
- Aktivasyon kodu ve yeni şifre akışı
- Drawer menü yapısı
- Search overlay ve arama algoritması
- MainMenu ekranı
- Ortak component altyapısı
- Türkçe/İngilizce i18n desteği
- Splash screen, app icon ve safe area düzenlemeleri
- Temel navigasyon bağlantıları

## Geliştirme Durumu

Bu repository, PTT Mobil için hazırlanmış frontend odaklı bir yeniden tasarım ve mobil mimari çalışmasıdır. Bazı modüllerin ekran yönlendirmeleri hazır olsa da tüm işlevsel içerikleri tamamlanmamıştır.

Planlanan geliştirmeler:

- Kargo modülünün detay ekranlarının tamamlanması
- Telgraf, Kargomat ve Filateli modüllerinin içeriklerinin geliştirilmesi
- Ortak hook yapısının daha merkezi hale getirilmesi
- API servis katmanının eklenmesi
- Backend entegrasyonunun yapılması
- MainCard bileşeninin görsel assetlerle daha temiz hale getirilmesi

## Kurulum

> React Native geliştirme ortamının Android veya iOS için kurulu olması gerekir.

```bash
git clone https://github.com/Emirbal23/Pttmobil.git
cd Pttmobil
npm install
```

### Android

```bash
npm run android
```

### iOS

```bash
cd ios
pod install
cd ..
npm run ios
```

### Metro

```bash
npm start
```

## Amaç

Bu proje, yalnızca ekran tasarımlarını çoğaltmak için değil, büyük ölçekli bir mobil uygulamada tekrar kullanılabilir bileşenler, sürdürülebilir dosya yapısı, çok dilli kullanım ve temiz navigasyon akışları oluşturmak için geliştirilmiştir.

## Geliştirici

Emirhan Bal  
Computer Engineering Student | React Native Developer | TypeScript | Mobile Application Development
