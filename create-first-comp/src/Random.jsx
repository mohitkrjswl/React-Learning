function Random() {
  let number = Math.random() * 10;
  return <h3 style={{'background-color':'#776651'}}>Random number is: {number}</h3>;
}

export default Random;
