# iOS Shortcuts

JavaScript generators for Apple Shortcuts. This repository includes the original **Good Night** shortcut and a new **Niwa - Open ChatGPT** launcher.

## Requirements

- macOS or another Node.js-compatible environment
- Node.js and npm
- Git

## Setup

```bash
git clone --recurse-submodules https://github.com/sachin7x/ios-shortcuts.git
cd ios-shortcuts/src
npm install
```

## Generate shortcuts

Generate every shortcut:

```bash
./index.js
```

Generate only Niwa's ChatGPT launcher:

```bash
./shortcuts/niwa-open-chatgpt.js
```

Generated `.shortcut` files are written to the repository's `data/` directory.

## Import on iPhone

1. Transfer the generated `Niwa - Open ChatGPT.shortcut` file to your iPhone using iCloud Drive, AirDrop, or another trusted method.
2. Open the file on your iPhone and follow the Shortcuts app's import prompts.
3. In Shortcuts, open the shortcut's details and add it to the Home Screen or assign it to a supported automation/trigger.

## Important limitation

**Niwa - Open ChatGPT** opens the ChatGPT app through its URL scheme. It does **not** guarantee that ChatGPT opens directly into the pink voice interface. iOS Shortcuts can only invoke actions and URL routes exposed by the installed app; the shortcut cannot force an internal screen that the app does not expose.

For direct voice launch, check the ChatGPT actions shown in your iPhone's Shortcuts app. If the app exposes a voice-specific action, use that supported action instead of assuming an undocumented URL. Do not treat this launcher as a complete Niwa assistant.

## Shortcut inventory

| Shortcut | Purpose |
|---|---|
| `Good Night` | Turns off Wi-Fi, Bluetooth, and cellular data, then sets brightness to zero. Review these actions before running. |
| `Niwa - Open ChatGPT` | Opens ChatGPT using `chatgpt://`; voice mode is not guaranteed. |

## Development

Shortcut generation depends on `@joshfarrant/shortcuts-js` (see `src/package.json`). Generated `.shortcut` files are ignored by Git under `data/`.
