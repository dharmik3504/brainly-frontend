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
    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        type,
        title,
      },
      {
        headers: {
          token,
        },
      }
    );
    onClose();
  }
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"></div>

          <div className="w-screen h-screen  fixed top-0  left-0 flex justify-center">
            <div className="flex flex-col justify-center">
              <span className="bg-white  p-4 rounded">
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
                <h1>Type</h1>
                <div className="flex gap-1 p-4 justify-center pb-2">
                  <Button
                    text="Youtube"
                    size="md"
                    onClick={() => {
                      setType(ContentType.youtube);
                    }}
                    variant={`${
                      type === ContentType.youtube ? "primary" : "secondary"
                    }`}
                  />
                  <Button
                    text="Twitter"
                    size="md"
                    onClick={() => {
                      setType(ContentType.twitter);
                    }}
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
        </div>
      )}
    </div>
  );
};
