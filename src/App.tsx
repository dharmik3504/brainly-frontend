import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  const handleClick = (e: any) => {
    console.log(e);
  };
  return (
    <div>
      <div className="flex justify-end">
        <Button
          variant={"secondary"}
          text={"Share Brain"}
          size={"md"}
          startIcon={<PlusIcon />}
          onClick={(e) => handleClick(e)}
        ></Button>
        <Button
          variant={"primary"}
          text={"Add Content"}
          size={"md"}
          startIcon={<PlusIcon size="md" />}
          onClick={(e) => handleClick(e)}
        ></Button>
      </div>
      <div className="flex gap-4">
        {/* https://x.com/mushfiq_sajib/status/1867525703107064288 */}
        {/* https://twitter.com/mannupaaji/status/1868186384961524009 */}
        <Card
          link="https://x.com/mushfiq_sajib/status/1867525703107064288"
          title="twitter test"
          type="twitter"
        />
        <Card
          link="https://www.youtube.com/embed/YMAdgnh9VOI?si=8yniPeHcsnsZt3Ak"
          title="youtube test"
          type="youtube"
        />
      </div>
    </div>
  );
}

export default App;
