import { Button } from "./components/ui/Button";

function App() {
  const handleClick = (e: any) => {
    console.log(e);
  };
  return (
    <div>
      <Button
        variant={"secondary"}
        text={"Share"}
        size={"md"}
        startIcon={"+"}
        onClick={(e) => handleClick(e)}
      ></Button>
    </div>
  );
}

export default App;
