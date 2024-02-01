import Item from "./Item";
const foodItems = ({ items }) => {
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItems={item}></Item>
      ))}
    </ul>
  );
};
export default foodItems;
