


function AdminForm() {


    const initialState = {
        name: '',
        image: '',
        price: ''
      }
      
        const [newPlant, setNewPlant] = useState(initialState);
      
      
      const handleChange = function(e){
        let {name, value} = e.target
        setNewPlant({...newPlant, [name]:value})
      }
      
      function handleSubmit(e){
        e.preventDefault();
  
        fetch(" http://localhost:3000/items", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPlant)
         })
         .then ((response) => response.json())
         .then(data => console.log(data))
      
        setNewPlant(initialState)
      }
      
      useEffect(() => {
          console.log('useeffect')
           
       },[newPlant]);





    return (
        <div>
        <h2>New Tool</h2>
        <form onSubmit={handleSubmit} >
          <input type="text" name="name"  value={newPlant.name} placeholder="Plant name" onChange={handleChange}/>
          <input type="text" name="image"  value={newPlant.image} placeholder="Image URL" onChange={handleChange}/>
          <input type="number" name="price"  value={newPlant.price} step="0.01" placeholder="Price" onChange={handleChange}/>
          <button type="submit">Add Plant</button>
        </form>
      </div>
    );
  }
  
  export default AdminForm;