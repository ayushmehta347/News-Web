import React,{useState} from 'react'


export default function TextForm(props) {
   const handleUpClick=()=>{
    // console.log("clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success");
   }
   const handlelowClick=()=>{
    // console.log("clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success");

   }

   const copy=()=>{
    // console.log("clicked" + text);
    var text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
   }
   const handleonchange=(event)=>{//type krne k liye onchnge listen krna prega
    setText(event.target.value)//to amke able to write in area
   }
//    text will be stored in text but to change text we have to use settext(text convrt 
//hoga new value se..on chnge func run hoga har chnge p)
    const[text,setText]=useState('');//default value of text
        
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* for box */}
    <textarea className="form-control" value={text} onChange={handleonchange}  style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
    <button className='btn btn-primary mx-2 my-1' onClick={handlelowClick}>Convert to LowerCase</button>

    <button className='btn btn-primary mx-2 my-1' onClick={copy}>copy Text</button>


    </div>
    <div className='container mu-3'  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        {/* filter iseliye use kiye taki strt se word ka lngth 1 na ho q ki split use krrhe ,,space ka 1 lngth hoga fr */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}</p>
        <p>{0.008*text.split(" ").length} minutes read </p>
    </div>
    </>
  )
}
 