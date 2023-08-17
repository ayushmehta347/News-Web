  import React, { useState } from 'react'


export default function About() {

    const[mystyle,setmystyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    //agr bck dark ye tho ye text show krega buttn p
    const[btntext,setbtntext]=useState("Enable Dark Mode")
   
   const togglestyle=()=>{
    if(mystyle.color==='black'){
        setmystyle({
            color:'white',
            backgroundColor:'black',
            border:"1px solid"
        })
        setbtntext("Enable light mode")//oppoite text if white bck
    }
        else{
            setmystyle({
                color:'black',
            backgroundColor:'white'
            })
            setbtntext("Enable dark mode")
        }
    }
  return (
    <div className='container' style={mystyle}>
        {/* bootstrap copy paste */}
        <h2 className='my=2'>About Us</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample" >
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={mystyle}>
                Accordion Item #1
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={mystyle}>
                Accordion Item #3
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
            </div>
            </div>
            <div className='container my-3'>
            <button onClick={togglestyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
           

           
    </div>
  )
}
