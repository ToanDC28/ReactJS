export default function Fruit() {
  //   const fruits = ["Apple", "Orange", "Mange", "Banana"];

  const fruits = [
    { name: "Apple", color: "red", price: 1000 },
    { name: "Orange", color: "orange", price: 2000 },
    { name: "Mango", color: "black", price: 2000 },
    { name: "Banana", color: "yellow", price: 2000 },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>
            {fruit.name} : {fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
