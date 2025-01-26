namespace ______vshidden
{
  declare class VsConvertEscapeCharacters
  {
    convertEscapeCharacters(text: string) : string;
    
    actorName(n: string) : string;
    
    partyMemberName (n:string) : string;
    
    /**
     * register a new escape character 
     * @param char escape character to use
     * @param method callback method which gets the paramter from within the brackets [] and should return the replacement text
     */
    registerEscapeCharacter(char : string, method: (string)=>string) : string;

    /**
     * retursn all registered escape characters
     */
    get CustomEscapeCharacters() :  { [id: string]:(string)=>string; };

    /**
     * register process escape character, these get processed character by character when the textbox draws the message text
     * @param char scape character to use
     * @param method callback method which gets the the current windows, the textstate and paramter from within the brackets [] and should return the replacement text
     */
    registerProcessEscapeCharacter(char : string, method: (windowBase:Window_Base, state: TextState, param: string)=>void) : string;

    get ProcessEscapeCharacter() :  { [id: string]:(windowBase:Window_Base, state: TextState, param: string)=>void; };
  }
}

declare class VsConvertEscapeCharacters
{

    static convertEscapeCharacters(text: string) : string;
    
    static actorName(n: string) : string;
    
    static partyMemberName (n:string) : string;

    /**
     * register a new escape character 
     * @param char escape character to use
     * @param method callback method which gets the paramter from within the brackets [] and should return the replacement text
     */
    static registerEscapeCharacter(char : string, method: (string)=>string) : string;

    /**
     * retursn all registered escape characters
     */
    static get CustomEscapeCharacters() :  { [id: string]:(string)=>string; };

    /**
     * register process escape character, these get processed character by character when the textbox draws the message text
     * @param char scape character to use
     * @param method callback method which gets the the current windows, the textstate and paramter from within the brackets [] and should return the replacement text
     */
    static registerProcessEscapeCharacter(char : string, method: (windowBase:Window_Base, state: TextState, param: string)=>void) : string;

    static get ProcessEscapeCharacter() :  { [id: string]: (windowBase:Window_Base, state: TextState, param: string)=>void; };
}

interface Window {
  VsConvertEscapeCharacters?: ______vshidden.VsConvertEscapeCharacters;  
}


declare interface Window_Base
{
  vsObtainEscapeParamArray(textState: TextState): String[];
}