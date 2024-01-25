import React from 'react'
const capitalize=(word)=>{
    const lower=word.toLowerCase();
    let newText=lower.charAt(0).toUpperCase()+lower.slice(1);
    return newText;
}
export default function Alert(props) {
  return (
 props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
</div>
  )
}


