const ItemListContainer = ({ greetings, ...color }) => {
  return <div style={color}>{greetings}</div>;
};

export default ItemListContainer;
