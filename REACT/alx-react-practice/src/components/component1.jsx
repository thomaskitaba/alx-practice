function Getname() {
  return 'Thomas Kitaba';
}
function MyComponent1() {
  let show = true;
  if (show) {
    return <h1 className= "center-me"> Welcome to {Getname()} world</h1>
  }
  else {
    return <h1 className= "center-me"> Welcome to React world</h1>
  }
}
export default MyComponent1;