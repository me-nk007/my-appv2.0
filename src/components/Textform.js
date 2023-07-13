import React, {useState} from "react";


export default function Textform(props) {
    
    const handleUpClick = ()=>{
       
        let newText1 = text.toUpperCase();
        setText(newText1);
        props.showAlert("Converted to Uppercase !", "success");
        
    }

    const handleLowClick = ()=>{
       
        let newText2 = text.toLowerCase();
        // let newText2 = ;
        setText(newText2);
        props.showAlert("Converted to Lowercase !", "success");
    }

    const handleClearClick = ()=>{
       
        let newText3 = "";
        setText(newText3);
        props.showAlert("Text Cleared", "success");
    }
    const handleCopy = ()=>{
      
        let text  = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);       // code for adding copy to clipboard functionality
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard", "success");
        
    }


    const handleOnChange = (event)=>{
       // console.log('OnChnage');
        setText(event.target.value);
        
    }

    const [text, setText] = useState('');       // useState Hook used
    // let nk = text;
   /* text = "new text";               // Wrong way to change the state
    setText("new text");               // Correct way to change the state  */
    return (
        <>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    style={{backgroundColor : props.mode === 'dark' ? 'black' : 'white', color:  props.mode === 'dark' ? 'white' : 'black' }}
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} <b>words</b> and {text.length} <b>characters</b></p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} <b>Minutes read</b></p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text: "Nothing to preview !"}</p>
        </div>
        </>
    );
}

