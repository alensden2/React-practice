// following pascal casing
function ListComp() {
  const fruits = ['apple', 'banana', 'orange', 'strawberry', 'blueberry']
  
  //const fruits: string[] = ['apple', 'banana', 'orange', 'strawberry', 'blueberry'];

  return (
    //fragmentation
    // <>
    //   <h1>List</h1>
    //   <ul className="list-group">
    //     <li className="list-group-item">Cras justo odio</li>
    //     <li className="list-group-item">Dapibus ac facilisis in</li>
    //     <li className="list-group-item">Morbi leo risus</li>
    //     <li className="list-group-item">Porta ac consectetur ac</li>
    //     <li className="list-group-item">Vestibulum at eros</li>
    //   </ul>
    // </>

    <>
      <h1>List</h1>
      {fruits.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  )
}

export default ListComp
