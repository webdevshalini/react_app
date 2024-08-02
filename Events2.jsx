import { useState } from "react"

 let student = [
    {id:1,name:'aman'},
    {id:2,name:'shivam'},
    {id:3,name:'raman'},
    {id:4,name:'chaman'},
 ]

 function Events2(){

    const [data, setData]= useState(student);

    const handleEdit =(userId)=>{
        console.log(userId);
    }
    const loader = () => {
        return<h1>LOADING.............</h1>
    }
    return(
        <div>{

            data == null ? loader() :
            
            data.map((item)=>{
                return <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <button onClick={()=>handleEdit(item.id)}>Edit</button>
                </div>
            })

        }
        </div>
    )  
 }
 export default Events2;