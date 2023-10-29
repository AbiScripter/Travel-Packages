export default function Item({ item }) {
  return (
    <li className="item">
      <input type="checkbox" />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <span>{"❌"}</span>
    </li>
  );
}
