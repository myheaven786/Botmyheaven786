/**
========================================================
      🕋MyHeaven🕋
========================================================
 Copyright (C) 2024.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : 🕋MyHeaven🕋                                                                    
 * @author : 🕋MyHeaven🕋
 * @description : 🕋MyHeaven🕋 ,A Multi-functional whatsapp bot.       
 * @version 1.0.1                                                                                              
 ========================================================
 **/


 var alivemessage = `*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ*
 
_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ 

_If any query : wa.me/923066366544_


*_Update Alive Message by adding text with Alive_*
*Eg: _.alive Your_Alive_Message_*`;
  





 const { tlang, ffmpeg,cmd ,alive,botpic} = require('../lib')

 cmd({
    pattern: "alive",
    category: "general",
    filename: __filename,
    desc: "is bot alive??"
},
async(Suhail, msg, text, {isCreator}) => {
  let get = text;
let urll = '';     
  let image = false;
  let video = false;
  
if(isCreator && text){
let aliv = await alive.findOne({ id:"🕋MyHeaven🕋" }) || await new alive({ id:"🕋MyHeaven🕋"}).save();
if (text.startsWith("get")) return msg.reply(aliv.get);

const linkPattern = /(https?:\/\/\S+)/gi;
const imageExtensions = ['.jpg', '.jpeg', '.png'];
const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.gif'];
let match = text.match(linkPattern) || false ; 
if(match)
{
    let i = 0;
    while (i < match.length && !image && !video ) 
    {
          urll = match[i];
          const extension = urll.substring(urll.lastIndexOf('.')).toLowerCase();
          if (imageExtensions.includes(extension)) { image = true;  video = false; } 
          else if (videoExtensions.includes(extension)) { video = true; image = false; }
          else { console.log(`Unknown link: ${urll}`)  }
          i++;
    }
}
if( video || image) { text = text.replace(urll, ''); }
await alive.updateOne({ id: '🕋MyHeaven🕋' }, { text: text, get : get, url: urll,  image: image,   video: video });
}
let aliv = await alive.findOne({ id:"🕋MyHeaven🕋" }) || await new alive({ id:"🕋MyHeaven🕋"}).save() ; 


alivemessage = aliv.text || "";
 

  image = aliv.image || false;
  video=aliv.video || false ;
  urll = aliv.url || await botpic() ;

  

const messageOptions = image ? { image: { url: urll }, caption: alivemessage } : video? { video: { url: urll },gifPlayback: true, caption: alivemessage } : {  text: alivemessage }

Suhail.sendMessage(msg.chat, messageOptions,{quoted : msg });
}
)

