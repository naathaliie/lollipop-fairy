import { useContext } from "react";
import "./AddLollipopForm.scss";
import { LollipopFairyContext } from "../Context/LollipopFairyContext";

const AddLollipopForm = () => {
  const { state } = useContext(LollipopFairyContext);

  return (
    <div id="addLollipopForm-box">
      <h2>All the lollipops</h2>
      {state.lollipops.map((l) => {
        return (
          <div className="oneLollipop-card" key={l.id}>
            <ul>
              <li style={{ listStyle: "none" }}>{l.name}</li>
              <li>Färg: {l.color}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default AddLollipopForm;
