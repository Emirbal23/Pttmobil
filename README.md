# PTT Mobil Interface Redesign

A React Native and TypeScript mobile interface redesign study created during my PTT internship. The project reimagines selected PTT Mobile-style flows with a focus on frontend architecture, reusable UI components, navigation structure, localization, and maintainable mobile screen development.

> This is not an official PTT application and is not affiliated with or published by PTT. It is a self-developed internship project created for mobile UI/UX and React Native implementation practice.

## Project Overview

The goal of this project is to explore how a large public-service mobile application experience can be organized in a cleaner, modular, and maintainable React Native codebase. It includes authentication screens, a main service menu, drawer navigation, search behavior, cargo-related screens, Kargomat screens, telegraph services, philately flows, and shared UI building blocks.

The project should be evaluated as a mobile frontend architecture and interface redesign case study rather than a production service integration.

## App Screens

The screenshots below are captured from the iOS simulator. Additional screenshots can be added to the `App Images/` folder using the same naming style.

| Promotion | Login | Register |
| --- | --- | --- |
| <img src="App%20Images/promotion.jpg" width="220" alt="Promotion screen"> | <img src="App%20Images/login.jpg" width="220" alt="Login screen"> | <img src="App%20Images/register.jpg" width="220" alt="Register screen"> |

| Main Menu | Drawer Menu | Search |
| --- | --- | --- |
| <img src="App%20Images/main-menu.jpg" width="220" alt="Main menu"> | <img src="App%20Images/drawer-menu.jpg" width="220" alt="Drawer menu"> | <img src="App%20Images/search.jpg" width="220" alt="Search overlay"> |

| Cargo Tracking |
| --- |
| <img src="App%20Images/cargo-tracking.jpg" width="220" alt="Cargo tracking"> |

## Highlights

- React Native + TypeScript mobile implementation
- PTT Mobile-inspired interface redesign study
- Modular screen structure organized by feature area
- Authentication flow screens: promotion, login, register, forgot password, activation code, and reset password
- Main menu and drawer-based navigation foundations
- Reusable button, input, header, drawer, stepper, segmented control, and search components
- Turkish and English localization with JSON-based language files
- Search overlay and language-aware menu search behavior
- Safe-area handling, responsive sizing, splash screen, and app asset setup
- Foundation screens for cargo, Kargomat, telegraph, philately, profile, contact, and nearby PTT flows

## Feature Areas

### Authentication

- Promotion/onboarding screen
- Login screen
- Register flow
- Forgot password flow
- Activation code step
- New password step
- Form validation and multilingual error messages

### Main Experience

- Main service menu
- Drawer navigation
- Profile, contact, and about screens
- Nearby PTT screen foundation
- Postcode and shipment calculation screens

### Cargo

- Cargo tracking screen
- Individual order flow
- Individual pre-acceptance flow

### Kargomat

- Nearest Kargomat screen
- Kargomat shipment screen
- Kargomat information screen
- Usage guide screen

### Additional PTT Services

- Telegraph service screens
- Philately product screens
- Announcements and purchased products screens

## Technical Stack

| Area | Technologies |
| --- | --- |
| Mobile | React Native, TypeScript |
| Navigation | React Navigation, Native Stack |
| Forms & Validation | Formik, Yup |
| Localization | i18next, react-i18next, JSON language files |
| UI Foundation | Reusable components, responsive sizing, safe-area handling |
| Native UX | Boot splash, device info, keyboard handling, gesture handler |
| Styling | React Native StyleSheet, shared theme colors and fonts |

## Architecture Notes

The codebase is organized around feature modules and shared UI primitives:

```text
src/modules/   Feature-based screens and module exports
src/shared/    Reusable components, i18n, theme, storage and utilities
src/app/       App entry, navigation setup and route definitions
src/assets/    Icons, images and app visual assets
assets/        Boot splash assets
```

This structure keeps business areas separated while allowing common interface elements to be reused across screens. The project includes a practical foundation for scaling a mobile frontend into more detailed service flows later.

## What This Project Demonstrates

- Translating a real-world mobile application style into a modular React Native implementation
- Designing reusable mobile UI components instead of one-off screens
- Structuring navigation for a multi-service mobile application
- Handling bilingual interface text with i18n
- Building form-heavy authentication flows with validation
- Thinking about enterprise mobile maintainability during an internship project

## Development

> React Native iOS or Android development environment is required.

```bash
git clone https://github.com/Emirbal23/Pttmobil.git
cd Pttmobil
npm install
```

### iOS

```bash
cd ios
pod install
cd ..
npm run ios
```

### Android

```bash
npm run android
```

### Metro

```bash
npm start
```

## Disclaimer

This project is a personal/internship interface redesign study. It does not contain official PTT production code, does not connect to official PTT systems, and should not be treated as an official PTT product.

## Developer

**Emirhan Bal**<br>
Computer Engineering Student | React Native Developer | TypeScript | Mobile Application Development

- GitHub: [github.com/Emirbal23](https://github.com/Emirbal23)
- LinkedIn: [linkedin.com/in/emirhan-bal-551239253](https://www.linkedin.com/in/emirhan-bal-551239253/)
