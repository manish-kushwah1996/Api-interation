import { useEffect, useState } from "react";

function AddingProduct() {
    const [pid,setPid]=useState("")
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
     const user={pid,name,price,description}
    

     
     async function Chack() {

        try {
            const body = JSON.stringify(user);
          
            let result = await fetch('http://localhost:3999/products', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body
            });
          
            if (result.ok) {
              alert("successfully product added ");
            } else {
              throw new Error('Failed to add product');
            }
          } catch (error) {
            console.error(error);
            alert("Failed to add product");
          }
          
        }
    return(
<div>
<div className="col-sm-6 offset-sm-3">
<input type="number" className="form-control" placeholder="pid"
onChange={(e)=>setPid(e.target.value)} />  <br></br>
<input type="text" className="form-control" placeholder="name" onChange={(e)=>setName(e.target.value)} />  <br></br>
<input type="number" className="form-control" placeholder="price" onChange={(e)=>setPrice(e.target.value)} />  <br></br>
<input type="text" className="form-control" placeholder="description" onChange={(e)=>setDescription(e.target.value)} />  <br></br>
<button onClick={Chack} >Add Product</button>
</div>
</div>
)}
export default AddingProduct ;