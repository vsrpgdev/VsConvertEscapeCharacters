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

//register a new arrow function for the escape character X
VsConvertEscapeCharacters.registerEscapeCharacter("X", (text) => {
  return "your text was "+text;
})


//register a new arrow function for the escape character X
VsConvertEscapeCharacters.registerProcessEscapeCharacter("Y",(currentWindow, state, param) => {

  CustomClass.DoSomething();
  CustomClass.DoSomething2(param);
  
  //draw icon
  currentWindow.processDrawIcon(1,state);
})