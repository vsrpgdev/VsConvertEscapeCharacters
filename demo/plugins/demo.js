/*:
 * @target MZ
 * @plugindesc example plugin
 * @author VsRpgDev
 * @help 
 * 
 * @param exampleParamter
 * @text exampleParamter
 * @type string
*/

const parameters = PluginManager.parameters("demo");
const exampleParamter = parameters["exampleParamter"] || "";

class CustomClass
{
  static DoSomething()
  {
    // convert escaped characters in exampleParamter
    let param = VsConvertEscapeCharacters.convertEscapeCharacters(exampleParamter);

    console.log("this is the paramter: "+ param);
  }
  static  DoSomething2(text)
  {
    // convert escaped characters in text
    let param = VsConvertEscapeCharacters.convertEscapeCharacters(text);

    console.log("this is the paramter: "+ param);
  }
}

function TmpText(text)
{
  return "your text was "+text;
}

//window object
window.VsConvertEscapeCharacters.registerEscapeCharacter("X", TmpText);

//global
VsConvertEscapeCharacters.registerEscapeCharacter("X", TmpText);

//Vs.plugins namespace
Vs.plugins.VsConvertEscapeCharacters.registerEscapeCharacter("X", TmpText);

//or through category grouped namespaces


//register a new arrow function for the escape character X
Vs.System.registerEscapeCharacter("X", (text) => {
  return "your text was "+text;
})

//register a new arrow function for the escape character Z
Vs.System.registerProcessEscapeCharacter("Z",(currentWindow, state, param) => {

  CustomClass.DoSomething();
  CustomClass.DoSomething2(param);
  
  //draw icon
  currentWindow.processDrawIcon(1,state);
})