# PTT Mobil Interface Redesign

A React Native + TypeScript mobile interface and architecture study created during my PTT internship. The project is inspired by the real PTT Mobile application experience, but it is not an official replacement for the production PTT Mobile app. It focuses on redesigning selected mobile flows, reusable UI components, navigation structure, localization and frontend maintainability.

> Internship project focused on mobile UI architecture, screen design, reusable components and React Native implementation practice.

## Quick Links

- Developer: [Emirhan Bal](https://github.com/Emirbal23)
- LinkedIn: [linkedin.com/in/emirhan-bal-551239253](https://www.linkedin.com/in/emirhan-bal-551239253/)
- GitHub Profile: [github.com/Emirbal23](https://github.com/Emirbal23)

## Project Context

During my PTT internship, I worked on a self-developed React Native project that reimagines selected PTT Mobile style screens and flows. The goal was to practice enterprise-scale mobile interface thinking: cleaner screen organization, reusable UI parts, multilingual text handling and maintainable navigation.

This repository should be evaluated as a frontend/UI architecture project, not as an official PTT product repository.

## Highlights

- React Native + TypeScript mobile implementation
- Authentication flow screens: login, register, forgot password, activation code and reset password
- Drawer-based navigation structure
- Reusable component system for buttons, inputs, headers, drawer and search UI
- Turkish/English i18n structure with JSON-based language files
- Search overlay and menu search behavior
- Responsive layout, safe-area handling, splash screen and app asset work
- Modular file organization for larger mobile app maintainability

## Main Feature Areas

### Authentication

- Login screen
- Register screen
- Forgot password flow
- Activation code step
- New password step
- Form validation and multilingual error messages

### Localization

- Turkish and English language support
- JSON-based language files
- Runtime language-switching structure
- i18n use across screens and validation text

### Navigation

- Drawer menu structure
- Main menu and submodule navigation foundations
- Routing structure for More, Telegram Services, Kargomat and Philately sections

### Search Experience

- SearchOverlay and SearchOverlayView components
- Language-aware menu search behavior
- Fast access pattern for menu and transaction discovery

### Reusable UI

- Button components
- Input components
- Header components
- Drawer components
- Search components
- Shared UI patterns for repeated screens

## Tech Stack

| Area | Technologies |
| --- | --- |
| Mobile | React Native, TypeScript |
| Navigation | React Navigation, Drawer navigation |
| Localization | i18n, JSON language files |
| UI Architecture | Reusable components, modular screens |
| Design Focus | Mobile UI/UX, responsive layout, safe area handling |

## Project Structure

```text
modules/   Feature-based screens and modules
shared/    Reusable components, hooks and utilities
assets/    Images, icons and application assets
app/       Navigation and app entry structure
```

## Completed Scope

- Login, register and reset password screens
- Activation code and new password steps
- Drawer menu structure
- Search overlay and search logic
- Main menu screen
- Shared component foundation
- Turkish/English i18n support
- Splash screen, app icon and safe-area improvements
- Initial navigation wiring

## Planned Improvements

- Complete detailed cargo module screens
- Expand Telegram Services, Kargomat and Philately content
- Centralize shared hook structure
- Add API service layer
- Improve visual assets in main cards
- Add a public demo video/GIF for recruiter review

## Installation

> React Native Android or iOS development environment is required.

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

## What This Project Demonstrates

- Ability to translate a large mobile app experience into modular React Native screens
- Understanding of reusable UI architecture and maintainable folder structure
- Practical TypeScript usage in mobile development
- Attention to localization, navigation and responsive mobile layout
- Internship-based product thinking in a corporate mobile application context

## Developer

Emirhan Bal  
Computer Engineering Student | React Native Developer | TypeScript | Mobile Application Development
