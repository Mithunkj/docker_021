import "./App.css";
import axios from "axios"

function App() {
  const getFun =async () =>{
    try {
      const res = await axios.get("http://localhost:7001/admin")
      console.log(res)
      alert(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div>
        <h1>This is user ui</h1>
        <button onClick={getFun}>Click</button>
      </div>
    </>
  );
}

export default App;
