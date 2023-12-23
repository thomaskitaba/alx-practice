import { Fragment } from "react";
function Display() {
  return console.log("hello");
  }
function ListGroup() {
  let name_list = [];
  const names = ["Thomas", "Kitaba", "Gebre", "Amanuel", "Tsegay", "Gebremedhin", "Gebrehiwot", "Gebremeskel", "Gebregergis"];
  for (let i = 0; i < names.length; i++) {
    name_list.push(<li key={i}>{names[i]}</li>);
  }
  return     <Fragment>
    <ul>
    {name_list}
    <hr />
    </ul>
    <ul>
      {names.map((n, index) => (<li className="list-group-item" key={n} onClick={Display(n)}>name {index + 1}: {n}</li>))}
    </ul>
  </Fragment>
}
export default ListGroup;
