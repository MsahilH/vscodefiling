import React, { useState } from 'react'

const Folder = ({handleInsertNode,project}) => {
    console.log(project);
    const [expand,setExpand] = useState(false);
    const [showInput,setShowInput] = useState({
        visible : false,
        isFolder : null
    });
    
    function stopPropo(e,isFolder){
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible : true,
            isFolder 
        })
    }

    function onAddFolder(e){
        if(e.keyCode === 8 && e.target.value){
            handleInsertNode(project.id,e.target.value,showInput);
            console.log(project.id,e.target.value,showInput)
            setShowInput({...showInput,visible: false });
        }
    }

    

    if(project.isFolder){
        return (
            <div className ='bundle'>
                <div className = 'folder' onClick={()=> setExpand(!expand)}>
                    <span style={{backgroundColor : 'yellow'}}>
                    Fo  : {project.name}
                    </span><div>
                        <button onClick={(e)=>stopPropo(e,true)}>Folder +</button>
                        <button onClick={(e)=>stopPropo(e,false)}>File   +</button>

                    </div>
                </div>
                <div style={{display:expand ? "block" : "none",paddingLeft:'50px'}}>
                    {
                        showInput.visible && (
                            <div className = 'inputContainer'>
                                <span>{showInput.isFolder? "FO : ":"FI : "}</span>
                                <input 
                                type='text'
                                onKeyDown = {onAddFolder}
                                onBlur={()=>setShowInput({...showInput,visible:false})}
                                className='inputContainerInput'
                                autoFocus
                                ></input>
                            </div>
                        )
                    }
                    
                    {
                        project.item.map((fofi)=>{
                            return(
                                <Folder project = {fofi} />
                            )
                        })
                    }
                </div>
            </div>
             )
        }else{
            return (
                <span style={{backgroundColor : 'greenyellow'}}>Fi : {project.name}</span>
            )
        }        
    }
    
 
export default Folder