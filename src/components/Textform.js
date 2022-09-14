import React,{useState} from 'react';



export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Conversion to uppercase completed","success");
        }
        const handleLoClick = ()=>{
            console.log("Lowercase was clicked");
            let newtext=text.toLowerCase();
            setText(newtext);
            props.showAlert("Conversion to lowercase completed","success");
            }
    const handleOnChange =(event)=>{ 
        console.log("On change");
        setText(event.target.value);
        }
    const clear=()=>{setText("");
                   props.showAlert("Text cleared","success");
}   
    const [text, setText] = useState("");
   
   return( 
    <>
   <div className="container"> 
    <div className="mb-5 my-4">
  
    <h1><label htmlFor="myBox" style={{color : props.mode==='light'?'black':'white'}} className="form-label" >{props.name}</label></h1>    
    <textarea className="form-control" id="myboxt" onChange={handleOnChange}  style={{backgroundColor : props.mode==='light'?'white':'grey',}} value={text} rows="8" ></textarea>
    <button type="button" onClick={handleUpClick} className="btn btn-primary my-2 mx-2">UppreCase</button>
    <button type="button" onClick={handleLoClick} className="btn btn-primary my-2 mx-2">LowerCase</button>
    <button type="button" onClick={clear} className="btn btn-primary my-2 mx-2">Clear</button>
    
    
    </div>
    </div>
    <div className="container my-1 " style={{color : props.mode==='light'?'black':'white'}}>
        <h2>Text Summaary</h2>
        <div>Character count: {text.length} <br/>
              Word count: {text.length>0?text.split(" ").length:0} <br />
              Average time to read : {text.length>0?0.008 * text.split(" ").length:0}
              </div>
         <h2 className='my-3'>Preview</h2>
         <div>{text.length>0?text:"Enter text to preview"}</div>     
    </div>
    </>
    )
    }