import visto from '../images/visto.png'

const Waiter = () => {
  return (
    <div className="waiterContainer">
      <div className="table1">
        <h2>MESA 1</h2>
        <input type="text"></input>
        <input type="image" src={visto} alt="visto"></input>
      </div>
      <div className="table2">
        <h2>MESA 2</h2>
        <input type="text"></input>
        <input type="image" src={visto} alt="visto"></input>
      </div>
      <div className="table3">
        <h2>MESA 3</h2>
        <input type="text"></input>
        <input type="image" src={visto} alt="visto"></input>
      </div>
      <div className="table4">
        <h2>MESA 4</h2>
        <input type="text"></input>
        <input type="image" src={visto} alt="visto"></input>
      </div>
      <div className="table5">
        <h2>MESA 5</h2>
        <input type="text"></input>
        <input type="image" src={visto} alt="visto"></input>
      </div>
      <div className="table6">
        <h2>MESA 6</h2>
        <input type="text"></input>
        <input type="image" src={visto} alt="visto"></input>
      </div>
    </div>
  )
}
export default Waiter;