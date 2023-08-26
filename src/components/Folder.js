import React, { useState } from 'react'

const Folder = ({project}) => {
    console.log(project);
    const [expand,setExpand] = useState(false);


    if(project.isFolder){
        return (
            <div className ='bundle'>
                <div className = 'folder' onClick={()=> setExpand(!expand)}>
                    <span style={{backgroundColor : 'yellow'}}>
                    Fo  : {project.name}
                    </span>
                </div>
                <div style={{display:expand ? "block" : "none",paddingLeft:'30px'}}>
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