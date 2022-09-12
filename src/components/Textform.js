import React,{useState} from 'react';



export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        }
    const handleOnChange =(event)=>{ 
        console.log("On change");
        setText(event.target.value);
        }

    const [text, setText] = useState("Enter Text Here");
   
   return(
<div className="container"> 
    <div className="mb-3">
  
    <h1><label for="myBox" className="form-label" >{props.name}</label></h1>    
    <textarea className="form-control" id="myboxt" onChange={handleOnChange} value={text} rows="8" ></textarea>
    <button type="button" onClick={handleUpClick} className="btn btn-primary">UppreCase</button>
    </div>
    </div>
  
    )
    }