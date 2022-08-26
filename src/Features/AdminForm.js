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
        relatedCategory:"", 
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
      <div className="full-screen-container">
          <div className="login-container">
          <h1 className="login-title">New Tool</h1>
            <form onSubmit={handleSubmit} >
                    <div className="input-group success">
                        <label className="username">Tool name</label>
                        <input type="text" name="name"  value={newTool.name} placeholder="Tool name" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">Place text</label>
                        <input type="text" name="placeText"  value={newTool.placeText} placeholder="Place text" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">Image URL</label>
                        <input type="text" name="image"  value={newTool.image} placeholder="Image URL" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">Price</label>
                        <input type="number" name="price"  value={newTool.price} step="0.01" placeholder="Price" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">Number in stock</label>
                        <input type="number" name="numberInStock"  value={newTool.numberInStock} step="1" placeholder="Number in stock" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">Description</label>
                        <input type="text" name="description"  value={newTool.description} placeholder="Description" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">Specifications</label>
                        <input type="text" name="specifications"  value={newTool.specifications} placeholder="Specifications" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">How to use</label>
                        <input type="text" name="howToUse"  value={newTool.howToUse} placeholder="How to use" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">Category</label>
                        <input type="text" name="category"  value={newTool.category} placeholder="Category" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">Related category</label>
                        <input type="text" name="relatedCategory"  value={newTool.relatedCategory} placeholder="Related category" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">Type</label>
                        <input type="text" name="type"  value={newTool.type} placeholder="Type" onChange={handleChange}/>
                    </div>
                    <div className="input-group success">
                        <label className="username">Brand</label>
                        <input type="text" name="brand"  value={newTool.brand} placeholder="Brand" onChange={handleChange}/>
                    </div>
                    <button type="submit" className="login-button">Add Tool</button>
            </form>
        </div>
      </div>
    );
  }
  
  export default AdminForm;