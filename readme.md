# RPG Maker MZ - VsConvertEscapeCharacters Plugin - Version: 1.2.0

1. [Installation](#1-installation)
1. [Configuration](#2-configuration)
1. [Usage](#3-usage)
    - [Methods](#31-methods)
        - [registerEscapeCharacter](#registerescapecharacter)
        - [registerProcessEscapeCharacter](#registerprocessescapecharacter)
        - [convertEscapeCharacters](#convertescapecharacters)
1. [How does the plugin work](#4-how-does-the-plugin-work)
1. [Changes to the core script](#5-changes-to-the-core-script)

This plugin allows you to register custom escape characters, which lets you, for example, access custom values from your plugin, trigger methods, draw images, etc., when a text message is displayed. Additionally, you can use convertEscapeCharacters from anywhere in the code through the static class VsConvertEscapeCharacters.

# 1. Installation 

1. Copy [VsConvertEscapeCharacters.js](./js/plugins/VsConvertEscapeCharacters.js) into your plugin directory
2. Activate the Plugin in **RPG Maker**
3. [Optional] if you want to use vscode IntelliSense also copy [VsConvertEscapeCharacters.d.ts](./js/plugins/VsConvertEscapeCharacters.d.ts) and [Vs.d.ts](./js/plugins/Vs.d.ts) into your plugins directory\
  Additionally, if you don’t already have one, copy  [jsconfig.json](./js/jsconfig.json) into you js directory (**not the plugin directory**).\
  to fully use IntelliSense you also ned type files for the rpg maker core files. you can use your own or copy the [types](./js/types/) folder into your js directory.

# 2. Configuration
no configuration required
# 3. Usage
like all my plugins you get multiple entry points for the plugin.

```javascript
//through the window object
window.VsConvertEscapeCharacters

//global
VsConvertEscapeCharacters

//Vs.plugins namespace
Vs.plugins.VsConvertEscapeCharacters
```
## 3.1 methods

- ## registerEscapeCharacter
  registers a new escape character.
  gets called in **[Window_Base](./js/types/rmmz_windows/Window_Base.d.ts).convertEscapeCharacters**

  Namespace: **VsConvertEscapeCharacters, Vs.System**
  ```javascript
  static registerEscapeCharacter(char : string, method: (string)=>string) : void;
  ```
  ### Parameters:
  > ### char [string](https://www.w3schools.com/js/js_strings.asp)
  escape character to register

  > ### method ([string](https://www.w3schools.com/js/js_strings.asp))=>[string](https://www.w3schools.com/js/js_strings.asp)
  method where you can replace the escaped character with your custom value

  ### examples:
  
  ```javascript
  function TmpText(text)
  {
    return "your text was "+text;
  }

  //window object
  window.VsConvertEscapeCharacters.registerEscapeCharacter("X", TmpText);

  //global
  VsConvertEscapeCharacters.registerEscapeCharacter("X", TmpText);

  //Vs.plugins namespace
  Vs.plugins.VsConvertEscapeCharacters.registerEscapeCharacter("X", (text) => {return "your text was "+text;});

  //Vs.System namespace
  Vs.System.registerEscapeCharacter("X", (text) => {return "your text was "+text;});

---

- ## registerProcessEscapeCharacter
  registers a new escape character.
  gets called character by character in **[Window_Base](./js/types/rmmz_windows/Window_Base.d.ts).processEscapeCharacter**


  Namespace: **VsConvertEscapeCharacters, Vs.System**
  ```javascript
  static registerProcessEscapeCharacter(char : string, method: (windowBase:Window_Base, state: TextState, param: string)=>void) : void;
  ```
  ### Parameters:
  > ### char [string](https://www.w3schools.com/js/js_strings.asp)
  escape character to register

  > ### method (windowBase:[Window_Base](./js/types/rmmz_windows/Window_Base.d.ts), state: [TextState](./js/types/rmmz_windows/TextState.d.ts), param: [string](https://www.w3schools.com/js/js_strings.asp))=>void
  method where you can execute your code

  ### examples:
  ```javascript
  //register a new arrow function for the escape character Z
  Vs.System.registerProcessEscapeCharacter("Z",(currentWindow, state, param) => {

    CustomClass.DoSomething();
    CustomClass.DoSomething2(param);
    
    //draw icon
    currentWindow.processDrawIcon(1,state);
  })
  ```
---

- ## convertEscapeCharacters
  converts the escaped characters in a string to their corresponding values

  Namespace: **VsConvertEscapeCharacters, Vs.Utils**
  ```javascript
  static convertEscapeCharacters(text: string) : string;
  ```
  ### Parameters:
  > ### text [string](https://www.w3schools.com/js/js_strings.asp)
  text with escaped characters

  > ### return [string](https://www.w3schools.com/js/js_strings.asp)
  returns text with replaced characters

---

# 4. How does the plugin work
The plugin overrides Window_Base.prototype.convertEscapeCharacters and Window_Base.prototype.processEscapeCharacter. It checks all registered escape characters.
If no entry is found, the original method gets called.\
For convertEscapeCharacters, the original convertEscapeCharacters method from Window_Base is called

# 5. Changes to the core script
- ### rmmz_windows.js
  - Window_Base
    - [M] convertEscapeCharacters: **overrides,original gets called**
    - [M] processEscapeCharacter: **overrides,original gets called**

# 6. Troubleshooting

No known bugs. The plugin should work with all other plugins as long as *convertEscapeCharacters* and *processEscapeCharacter* are still called.

# 7. License
VsConvertEscapeCharacters by vsrpgdev is marked with CC0 1.0 Universal. To view a copy of this license, visit https://creativecommons.org/publicdomain/zero/1.0/