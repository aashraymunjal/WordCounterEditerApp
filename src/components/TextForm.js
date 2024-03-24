import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        // console.log("uppercase clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        // console.log("uppercase clicked" + text);
        let newText = '';
        setText(newText);
    }
    const handleOnChange = ( event: React.ChangeEvent<HTMLInputElement>) =>{
        // console.log("handle on change logged");
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    // setText("enter the box text here");
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}> 
            <h1 style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

        </div>

        <div className='container mb-3' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words & {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text above to preview here.."}</p>
        </div>
        </>

    )
}
