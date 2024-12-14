import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  const handleClick = (e: any) => {
    console.log(e);
  };
  return (
    <div>
      <Button
        variant={"secondary"}
        text={"Share Brain"}
        size={"sm"}
        startIcon={<PlusIcon size="sm" />}
        onClick={(e) => handleClick(e)}
      ></Button>
      <Button
        variant={"primary"}
        text={"Add Content"}
        size={"md"}
        startIcon={<PlusIcon size="md" />}
        onClick={(e) => handleClick(e)}
      ></Button>
      <Button
        variant={"primary"}
        text={"test "}
        size={"lg"}
        startIcon={<PlusIcon size="lg" />}
        onClick={(e) => handleClick(e)}
      ></Button>
    </div>
  );
}

export default App;
