import ListComp from "./components/ListComp"
function App(){
  const fruits = ['apple', 'banana', 'orange', 'strawberry', 'blueberry'];
  return <div> <ListComp fruits={fruits} heading="List 1"/></div>
}

export default App;
