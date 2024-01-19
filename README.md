# Retrobox
Retrobox is a multiplatform desktop client that allows you to play games from all kinds of consoles using existing emulators in one app. Currently aiming to support Windows, macOS & Linux with Dolphin and Ryunix.

# Releases
Links for Windows, macOS & Linux will be added once released.
> Retrobox is under active development, some features might not be avaliable (on all platforms).

# Features & Roadmap
- [x] Website
- [ ] Desktop Client
  - [ ] Windows
  - [ ] macOS
  - [ ] Linux
- [ ] Emulators
    - [ ] Dolphin
    - [ ] Ryujinx
- [ ] UI
    - [ ] Sidebar
      - [ ] Categories (Consoles)
      - [ ] Settings
    - [ ] Library per category/console
      - [ ] Games
      - [ ] Drag & Drop installation
    - [ ] Settings
      - [ ] Username
      - [ ] Language
      - [ ] Emulators
        - [ ] Installing/Uninstalling
        - [ ] Verifying/Updating

# Motivation
I wanted to create a simple app that would allow me to play games from all kinds of consoles in one app, i'm someone who loves everything in one place/ecosystem.

# Self-hosting & Contributing
Currently i am still working on a guide for self-hosting, but if you want to contribute you can do so by forking this repository and creating a pull request.

# Architecture and Packages

## Monorepo
This project is a monorepo, and is split into two different folders, one for the static website and one for the multiplatform desktop client.
As a package manager i decided to go with [Bun](https://bun.sh) a superfast and simple package manager, it may not be avaliable on all platforms yet.

### Packages
- Next.js: [nextjs.org](https://nextjs.org) - The React Framework for Production used for the landing page.
- Tauri: [tauri.app](https://tauri.app) - An app construction toolkit that lets you build software for all major desktop operating systems using web technologies.