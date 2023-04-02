import ArrayTabs from "./Components/ArrayTabs";

function App() {
  const array = [];
  array.push({"label": "Tab 1", "content": "Tab 1 content is showing here"});
  return (
    <div>
      <ArrayTabs arrayOfTabs={array} />
    </div>
  );
}

export default App;
