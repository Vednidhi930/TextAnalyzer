import React, { useState } from 'react';



export default function Textform(props) { 
    
    const [text,setText]=useState("");

    const handlechange=(event)=>{
       setText(event.target.value);
    }
    const convertUp=()=>{
        let upper =text.toUpperCase();
        setText(upper);
        props.showAlert("Converted to Uppercase !", "success");
        setTimeout(() => {
            props.showAlert("");
        }, 1500);
    }

    const convertLw=()=>{
        console.log("convert in lowercase");
        let lower =text.toLowerCase();
        setText(lower);
        props.showAlert("Converted to LowerCase !", "success");
        setTimeout(() => {
            props.showAlert("");
        }, 1500);

    }

    const convertCl=()=>{
        console.log("Text is cleared !");
        let cancel ="";
        setText(cancel);
        props.showAlert("copied to clipboard !", "success");
        setTimeout(() => {
            props.showAlert("");
        }, 1500);
    }

    const convertCp=()=>{
        console.log("Text is copied !");
        navigator.clipboard.writeText(text);
        props.showAlert("Text is Copied !", "success");
        setTimeout(() => {
            props.showAlert("");
        }, 1500);
    }
    return (

        <>
            <h1 style={{color:props.mode==='dark'?'white':'black'}} className='my-2 ' >{props.heading}</h1>

            <div className="mb-3 my-2">
                <textarea style={{backgroundColor:props.mode==='dark'?'#4D3436':'white',color:props.mode==='dark'?'white':'black'}} className="form-control" id="mybox" rows="7" onChange={handlechange} value={text}></textarea>

            <button disabled={text.length===0} type="button" className="btn btn-primary my-2 " onClick={convertUp} style={{backgroundColor:"#FFB133",color:"black",border:"2px solid black",fontWeight:"bold",borderRadius:"100px"}}>Convert in Capital</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={convertLw} style={{backgroundColor:"#28BEBB",color:"black",border:"2px solid black",borderRadius:"100px",fontWeight:"bold"}}>Convert in Small</button>
            <button disabled={text.length===0}type="button" className="btn btn-success my-2 mx-1" onClick={convertCl} style={{backgroundColor:"#25CE42",color:"black",border:"2px solid black",borderRadius:"100px",fontWeight:"bold"}}>Remove your Text</button>
            <button disabled={text.length===0} type="button" className="btn btn-danger my-2 mx-1" onClick={convertCp} style={{backgroundColor:"#EF3E50",color:"black",border:"2px solid black",borderRadius:"100px",fontWeight:"bold"}}>Copy to Clipboard</button>
            </div>

            <div className='detail'>
               <h2 style={{color:props.mode==='dark'?'white':'black'}}>Alphabat:{text.length}</h2>
               <h2 style={{color:props.mode==='dark'?'white':'black'}}>Word:{text.split(/\s+/).filter(element=>{return element.length!==0}).length}</h2>

            </div>

           
           
           
        </>
    )
}
