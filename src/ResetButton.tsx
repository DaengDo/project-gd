import { useResource } from "./resource/useResource";

const ResetButton = () => {
  const { dispatch } = useResource();

  const handleClick = () => dispatch({ type: "reset" });

  return (
    <button type="button" onClick={handleClick}>
      ReStart
    </button>
  );
};

export { ResetButton };
