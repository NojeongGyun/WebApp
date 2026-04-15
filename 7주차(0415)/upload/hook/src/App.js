import Counter from "./Counter";
import Textfield from "./Textfield";
import Checkbox from "./Checkbox";
import Form from "./Form";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Component Practice</h1>

      <Counter />
      <hr />

      <Textfield />
      <hr />

      <Checkbox />
      <hr />

      <Form />
    </div>
  );
}