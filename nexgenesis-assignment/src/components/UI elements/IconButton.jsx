import { ImSpinner3 } from "react-icons/im";

const IconButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-2xl"
    >
      {props.isLoading ? (
        <ImSpinner3 size={20} className="animate-spin" />
      ) : (
        props.icon
      )}
    </button>
  );
};

export default IconButton;
