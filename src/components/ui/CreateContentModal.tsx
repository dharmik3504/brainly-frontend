import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType {
  youtube = "Youtube",
  twitter = "Twitter",
}
export const CreateComponentModal = ({ open, onClose }: any) => {
  const [type, setType] = useState(ContentType.youtube);
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const token = localStorage.getItem("token");
    await axios.post(`${BACKEND_URL}/api/v1/content`);
  }
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div
                className="flex justify-end cursor-pointer"
                onClick={onClose}
              >
                <CrossIcon />
              </div>
              <div>
                <Input reference={titleRef} placeholder="Title" />
                <Input reference={linkRef} placeholder="Link" />
              </div>
              <div className="flex">
                <Button
                  text="Youtube"
                  size="md"
                  variant={`${
                    type === ContentType.youtube ? "primary" : "secondary"
                  }`}
                />
                <Button
                  text="Twitter"
                  size="md"
                  variant={`${
                    type === ContentType.twitter ? "primary" : "secondary"
                  }`}
                />
              </div>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  text="Submit"
                  size="md"
                  onClick={addContent}
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
