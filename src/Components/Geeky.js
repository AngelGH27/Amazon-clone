import React,{useState} from 'react'

function Geeky() {

    const [value,setValue]=useState("");

    function append(){
     // var ref=document.getElementById("textBox")

     // var value=ref.value;

      alert(value);

      var divRef=document.getElementById("appendArea");

      var node=document.createElement('p');

      node.innerText=value;

      

    //   divRef.append(value);

    }


  return (
    <div><input type="text" id="textBox" placeholder="Enter your text here"></input>
    <button onClick={append}  onChange={(event)=>{setValue(event.target.value)}}>Append text</button>

    <div id='appendArea'>

    </div>
    
    </div>
  )
}

export default Geeky