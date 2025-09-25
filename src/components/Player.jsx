import { useState } from "react";
export default function Player({ intialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(intialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  isEditing &&
    (editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    ));

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {/* <span className="player-name">{name}</span> */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
