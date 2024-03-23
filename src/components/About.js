import React, { useState } from 'react'

export default function About() {
    const [MyStlye,setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });  
    
    const toggleStyle = ()=>{
        if(MyStlye.color==='black'){
            setmystyle({
                color:'white',
                backgroundColor: 'black'
            })
        }
        else{
            setmystyle({
                color:'black',
                backgroundColor: 'white'
            })
        }
    }


  return (
    <div className='container' style={MyStlye}>
        <h2>About Us</h2>
            <div className = "accordion accordion-flush" id="accordionFlushExample" style={MyStlye}>
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"style={MyStlye}>
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"style={MyStlye}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={MyStlye}>
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"style={MyStlye} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"style={MyStlye} >
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"style={MyStlye}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <button onClick={toggleStyle} type="button" className="btn btn-primary">Toggle Dark Mode</button>
            </div>
    </div>
  )
}
