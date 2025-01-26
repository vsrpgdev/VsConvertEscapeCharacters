# RPG Maker MZ - VsConvertEscapeCharacters Plugin
Version: 1.0.0

1. [Installation](#1-installation)
1. [Configuration](#2-configuration)
1. [Usage](#3-usage)
1. [How does the plugin work](#4-how-does-the-plugin-work)
1. [Changes to the core script](#5-changes-to-the-core-script)

This plugin allows you to register custom escape characters, which lets you, for example, access custom values from your plugin, trigger methods, draw images, etc., when a text message is displayed. Additionally, you can use convertEscapeCharacters from anywhere in the code through the static class VsConvertEscapeCharacters.

## 1. Installation 

1. Copy [VsConvertEscapeCharacters.js](./VsConvertEscapeCharacters.js) into your plugin directory
2. Activate the Plugin in **RPG Maker**
3. [Optional] if you want to use vscode intelisense also copy [VsConvertEscapeCharacters.d.ts](./VsConvertEscapeCharacters.d.ts)
  Additionally, if you don’t already have one, copy  [jsconfig.json](./jsconfig.json) into your js directory (**not the plugin directory**).

## 2. Configuration
no configuration required
## 3. Usage

### 3.1 registerEscapeCharacter
```javascript

// arrow functions -------------
VsConvertEscapeCharacters.registerEscapeCharacter("X",(text)=> {
  return "your text was "+text;
});

// old style -------------------
function ReplaceText(text)
{
  return "your text was "+text;
}
VsConvertEscapeCharacters.registerEscapeCharacter("X",ReplaceText);
```

### 3.2 registerProcessEscapeCharacter
```javascript

// arrow functions -------------
VsConvertEscapeCharacters.registerProcessEscapeCharacter("X",(currentWindow, textState, param)=> {
  //do whatever you like
  //example draw icon
  currentWindow.processDrawIcon(param, textState);
});

// old style -------------------
function CustomMethod(currentWindow, textState, param)
{
  return "your text was "+text;
  //do whatever you like
  //example draw icon
  currentWindow.processDrawIcon(param, textState);
}
VsConvertEscapeCharacters.registerProcessEscapeCharacter("X",CustomMethod);
```

### 3.3 convertEscapeCharacters - get escaped character from wherever you want

```javascript
finalText = VsConvertEscapeCharacters.convertEscapeCharacters(text);
```
## 4. How does the plugin work
The plugin overrides Window_Base.prototype.convertEscapeCharacters and Window_Base.prototype.processEscapeCharacter. It checks all registered escape characters.
If no entry is found, the original method gets called.

For convertEscapeCharacters, the original convertEscapeCharacters method from Window_Base is executed

## 5. Changes to the core script
- ### rmmz_windows.js
  - Window_Base
    - [M] convertEscapeCharacters: **overrides,original gets called**
    - [M] processEscapeCharacter: **overrides,original gets called**

## 6. Troubleshooting

No known bugs. The plugin should work with all other plugins as long as *convertEscapeCharacters* and *processEscapeCharacter* are still called.

## 7. License
VsConvertEscapeCharacters by rpgmakerwebthickness467 is marked with CC0 1.0 Universal. To view a copy of this license, visit https://creativecommons.org/publicdomain/zero/1.0/