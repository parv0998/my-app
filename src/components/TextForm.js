import { useState } from "react"
import React  from 'react'

export default function TextForm(props) {
    const TextToUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Your text is converted to UPPERCASE","success");
    }
    const TextToLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Your text is converted to lowercase","success");
    }
    const ClearText=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Your text is Succesfully Cleared","success");
    }
    const invertCaseText=()=>{
      let str2='';
      let str=text.toLowerCase();
      let arr=str.split("");
      for(let i=0;i<arr.length;i++){
        if(i%2!==0){
            console.log(i);
            arr[i]=arr[i].toUpperCase();
        }
        str2+=arr[i];
        }
        
      setText(str2);
      props.showAlert("Your text is converted to iNvErTcAsE","success");
}
const SentenceCaseText=()=>{
  let newText=text.replace(text.charAt(0),text.charAt(0).toUpperCase());
  setText(newText);
  props.showAlert("Your text is converted to SentenceCase","success");
}


const TextOnChange=(event)=>{
  setText(event.target.value);
}
const Capital=()=>{
  let str=text.toLowerCase();
  let str2='',arr2=[];
let arr=str.split(" ");
for(let i=0;i<arr.length;i++){
   arr[i]=arr[i].replace(arr[i].charAt(0),arr[i].charAt(0).toUpperCase());
   arr2.push(arr[i]);
  str2= arr2.join(" ");

}
setText(str2);
}
const Copy=()=>{
  let text=document.getElementById("myform");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Your text is Copied To Clipboard","info");
}

  
    const [text,setText]=useState('');
  return (
    <>
<div className={`container mb-3 my-3`}>
  <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
  <textarea className="form-control " style={{backgroundColor:`${props.mode==='light'?'dark':'light'}`}} id="myform" value={text} onChange={TextOnChange} rows="6" placeholder="Enter Text Here"></textarea>
</div>
<button type="button" className="btn mx-1 btn-sm" style={{backgroundColor:`${props.mode==='light'}`?'light':`${props.setAlert.type}`}} onClick={TextToUpperCase}>Convert To Uppercase</button>
<button type="button" className={`btn mx-1 btn-sm btn-${props.mode==='light'?'light':'danger'}`} onClick={TextToLowerCase}>Convert To Lowercase</button>
<button type="button" className={`btn mx-1 btn-sm btn-${props.mode==='light'?'light':'danger'}`} onClick={ClearText}>Clear Text</button>
<button type="button" className={`btn mx-1 btn-sm btn-${props.mode==='light'?'light':'danger'}`} onClick={SentenceCaseText}>Sentencecase</button>
<button type="button" className={`btn mx-1 btn-sm btn-${props.mode==='light'?'light':'danger'}`} onClick={invertCaseText}>iNvErT cAsE</button>
<button type="button" className={`btn mx-1 btn-sm btn-${props.mode==='light'?'light':'danger'}`} onClick={Capital}>FirstLetter Capital</button>
<button type="button" className={`btn mx-1 btn-sm btn-${props.mode==='light'?'light':'danger'}`} onClick={Copy}>Copy Text</button>
<div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
  <h3>Your Summary Has: </h3>
  <p>Word Count: {text.split(" ").length}</p>
  <p>Character Count: {text.length}</p>
  <p>Minutes to read: {0.008*text.split(" ").length}m</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
