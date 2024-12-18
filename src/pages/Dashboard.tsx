import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateComponentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Dashboard() {
  const [modalOpen, setModelOpen] = useState(false);
  const handleClick = (e: any) => {
    e.prevent;
    console.log("insise");
    setModelOpen(true);
  };
  const { contents, refresh } = useContent();
  useEffect(() => {
    refresh();
  }, [modalOpen]);
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
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/brain/share`,
                {
                  share: true,
                },
                {
                  headers: {
                    token: localStorage.getItem("token"),
                  },
                }
              );
              const shareUrl = `http://localhost:5173/${response.data.hash}`;
              alert(shareUrl);
            }}
          ></Button>
          <Button
            variant={"primary"}
            text={"Add Content"}
            size={"md"}
            startIcon={<PlusIcon size="md" />}
            onClick={(e) => handleClick(e)}
          ></Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          {/* https://x.com/mushfiq_sajib/status/1867525703107064288 */}
          {/* https://twitter.com/mannupaaji/status/1868186384961524009 */}

          {contents.map(({ type, link, title, tag, userId }) => (
            <Card link={link} title={title} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
