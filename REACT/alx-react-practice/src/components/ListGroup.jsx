import { Fragment } from "react";

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
      {names.map((name, index) => (<li>name {index + 1}: {name}</li>))}
    </ul>
  </Fragment>
}
export default ListGroup;
