import { useState } from "react";
import { Icons } from "../../utils/icons";

interface Fields {
  id: number;
  label: string;
  type: string;
  placeholder?: string;
}
interface NewProps {
  title: string;
  fields: Fields[];
}
export const New = ({ title, fields }: NewProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="flex shadow p-2 m-2 rounded dark:shadow-white">
        <h1 className="text-sm text-zinc-500">{title}</h1>
      </div>

      <div className="flex shadow p-2 m-2 rounded dark:bg-black bg-white dark:shadow-white">
        <div className="flex flex-1 justify-center items-center">
          <label
            htmlFor="file"
            className="relative border border-violet-500 rounded-full"
          >
            <img
              className="w-24 h-24 rounded-full object-cover cursor-pointer"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="image"
            />
            <Icons.addAPhoto className="absolute bottom-0 right-2 text-violet-500 cursor-pointer" />
          </label>
          <input type="file" id="file" hidden onChange={handleFileChange} />
        </div>

        <div className="flex flex-[2]">
          <form className="flex flex-wrap gap-7 justify-around">
            {fields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.label}
                  className="flex items-center gap-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  id={field.label}
                  className="w-full p-2  border-b border-zinc-500 focus:outline-none focus:border-violet-500 bg-transparent outline-none"
                />
              </div>
            ))}

            <button type="submit" className="btn w-40 mt-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
