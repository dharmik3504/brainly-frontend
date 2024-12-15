import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";

export const CreateComponentModal = ({ open, onClose }: any) => {
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
                <Input placeholder="Title" />
                <Input placeholder="Link" />
              </div>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  text="Submit"
                  size="md"
                  onClick={() => {}}
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

function Input({
  onChange,
  placeholder,
}: {
  onChange: () => {};
  placeholder: string;
}) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 border rounded m-2"
        onChange={onChange}
      />
    </div>
  );
}
