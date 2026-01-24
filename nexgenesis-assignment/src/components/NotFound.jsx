import { TbMoodSadDizzy } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white">
      <TbMoodSadDizzy className="text-9xl text-gray-400" />
      <p className="text-5xl font-medium text-gray-400">Not found!</p>
    </div>
  );
};

export default NotFound;
