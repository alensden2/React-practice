import ListComp from "./components/ListComp"
function App(){
  const fruits = ['apple', 'banana', 'orange', 'strawberry', 'blueberry'];
  const getFruit = (fruit : string) => {
    console.log(fruit);
  }
  return <div> <ListComp fruits={fruits} heading="List 1" onSelectedFruit={getFruit}/></div>
}

export default App;
