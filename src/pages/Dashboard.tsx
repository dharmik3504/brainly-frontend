import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateComponentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { Sidebar } from "../components/ui/Sidebar";

function Dashboard() {
  const [modalOpen, setModelOpen] = useState(false);
  const handleClick = (e: any) => {
    e.prevent;
    console.log("insise");
    setModelOpen(true);
  };
  return (
    <div>
      <Sidebar />

      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateComponentModal
          open={modalOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        />
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
    </div>
  );
}

export default Dashboard;
