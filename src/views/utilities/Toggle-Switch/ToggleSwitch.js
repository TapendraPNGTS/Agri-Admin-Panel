import { useState } from "react";
import "./ToggleSwitch.css";
export const Toggle = ({ label, toggled, onClick }) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <>
      <center>
        <div className="switcher">
          <label htmlFor="toggle-1">
            <span>
              <small></small>
            </span>
            <small>Create&nbsp;&nbsp;</small>
            <input
              type="checkbox"
              id="toggle-1"
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
              }}
            />
            <span>
              <small></small>
            </span>
          </label>
        </div>
      </center>
    </>
  );
};
