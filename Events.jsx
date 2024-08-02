import { useState } from "react";

function Events(){
    const [name,setName]= useState("");
    console.log(name);
    const [brands,setBrands]=useState("");
    const[click,setClick]=useState(false);
    console.log(click)
    console.log(brands);
    const handleClick=()=>{
        alert("clicked")
    }
    const handleClickme=()=>{
        alert("clicked me....")
    }
    return(
    <div>
        <button onClick={handleClick}>click</button>
        <button onClick={handleClickme}> click me</button>
        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="name" />
        <select onChange={(e)=> setBrands(e.target.value)}>
            <option value="">Brands</option>
            <option value="gucci">gucci</option>
            <option value="adidas">Adidas</option>
            <option value="nike">nike</option>
        </select>
        <label>
            <input type="checkbox" checked={click} onChange={(e)=>setClick(!click)} />
            check me
        </label>
    </div>
    )
}
export default Events;