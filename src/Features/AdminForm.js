import React, {useState} from 'react'


function AdminForm() {


    const initialState = {
        name: "",
        placeText: "",
        price: "",
        numberInStock: "",
        description: "",
        specifications: "",
        howToUse: "",
        category: "",
        finish: "",  
        // relatedCategory:"", 
        type: "",
        brand: "",
        image: ""
      }
      
        const [newTool, setNewTool] = useState(initialState);
      
      
      const handleChange = function(e){
        let {name, value} = e.target
        setNewTool({...newTool, [name]:value})
      }
      
      function handleSubmit(e){
        e.preventDefault();
  
        fetch("http://localhost:3001/items", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTool)
         })
         .then ((response) => response.json())
         .then(data => console.log(data))
      
        setNewTool(initialState)
      }
      
     





    return (
        <div>
        <h2>New Tool</h2>
        <form onSubmit={handleSubmit} >
          <input type="text" name="name"  value={newTool.name} placeholder="Tool name" onChange={handleChange}/>
          <input type="text" name="placeText"  value={newTool.placeText} placeholder="Place text" onChange={handleChange}/>
          <input type="text" name="image"  value={newTool.image} placeholder="Image URL" onChange={handleChange}/>
          <input type="number" name="price"  value={newTool.price} step="0.01" placeholder="Price" onChange={handleChange}/>
          <input type="number" name="numberInStock"  value={newTool.numberInStock} step="1" placeholder="Number in stock" onChange={handleChange}/>
          <input type="text" name="description"  value={newTool.description} placeholder="Description" onChange={handleChange}/>
          <input type="text" name="specifications"  value={newTool.specifications} placeholder="Specifications" onChange={handleChange}/>
          <input type="text" name="howToUse"  value={newTool.howToUse} placeholder="How to use" onChange={handleChange}/>
          <input type="text" name="category"  value={newTool.category} placeholder="Category" onChange={handleChange}/>
          <input type="text" name="finish"  value={newTool.finish} placeholder="Finish" onChange={handleChange}/>
          {/* <input type="text" name="relatedCategory"  value={newTool.relatedCategory} placeholder="Related category" onChange={handleChange}/> */}
          <input type="text" name="type"  value={newTool.type} placeholder="Type" onChange={handleChange}/>
          <input type="text" name="brand"  value={newTool.brand} placeholder="Brand" onChange={handleChange}/>
          <button type="submit">Add Tool</button>
        </form>
      </div>
    );
  }
  
  export default AdminForm;