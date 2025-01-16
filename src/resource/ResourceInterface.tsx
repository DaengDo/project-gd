import { useResource } from "./useResource";

const ResourceInterface = () => {
  const { resource } = useResource();

  const getWeaponeStatus = (weapon: number | null) => {
    if (weapon === null) return ""; // 초기값
    if (weapon === 0) return "망가짐";
    return `내구도 (${weapon})`;
  };

  return (
    <div
      style={{
        display: "flex",
        outlineWidth: "1px",
        outlineColor: "black",
        outlineStyle: "solid",
        width: "fit-content",
        gap: "30px",
        padding: "10px",
      }}
    >
      <div style={{ minWidth: "130px" }}>
        <h2>자원</h2>
        <ul>
          <li>🍚 식량: {resource.meal}</li>
          <li>🚰 식수: {resource.water}</li>
          <li>🧦 면포: {resource.cloth}</li>
          <li>🌿 약초: {resource.herb}</li>
        </ul>
      </div>

      <div>
        <h2>무기</h2>
        <ul>
          <li>🏹 활: {getWeaponeStatus(resource.bow)}</li>
          <li>↗️ 화살: {resource.arrows}</li>
          <li>🗡️ 도검: {getWeaponeStatus(resource.sword)}</li>
        </ul>
      </div>
    </div>
  );
};

export { ResourceInterface };
