import { useState } from "react";
import { getRangedRandom } from "./utils";

function App() {
  const [resources, setResources] = useState<{
    water: number | null;
    meal: number | null;
    cloth: number | null;
    herb: number | null;
  }>({
    water: null,
    meal: null,
    cloth: null,
    herb: null,
  });

  const [weapons, setWeapons] = useState<{
    bow: number | null;
    arrows: number | null;
    sword: number | null;
  }>({
    bow: null,
    arrows: null,
    sword: null,
  });

  const handleClickReset = () => {
    setResources({
      cloth: getRangedRandom(0, 5),
      herb: getRangedRandom(0, 5),
      meal: getRangedRandom(0, 5),
      water: getRangedRandom(0, 5),
    });

    setWeapons({
      arrows: getRangedRandom(0, 10),
      bow: getRangedRandom(0, 10),
      sword: getRangedRandom(0, 10),
    });
  };

  return (
    <>
      <button onClick={handleClickReset}>reset</button>
      <div
        style={{
          display: "flex",
          outlineWidth: "1px",
          outlineColor: "black",
          outlineStyle: "solid",
          width: "400px",
          padding: "10px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "160px" }}>
          <h2>자원</h2>
          <ul>
            <li>🍚 식량: {resources.meal}</li>
            <li>🚰 식수: {resources.water}</li>
            <li>🧦 면포: {resources.cloth}</li>
            <li>🌿 약초: {resources.herb}</li>
          </ul>
        </div>

        <div style={{ width: "200px" }}>
          <h2>무기</h2>
          <ul>
            <li>
              🏹 활: {weapons.bow === 0 ? "부러짐" : `내구도 (${weapons.bow})`}
            </li>
            <li>↗️ 화살: {weapons.arrows}</li>
            <li>
              🗡️ 도검:{" "}
              {weapons.sword === 0 ? "부러짐" : `내구도 (${weapons.sword})`}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
