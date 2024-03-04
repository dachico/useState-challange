import { useState } from "react";

export default function Employee() {
  const [employeeCount, setEmployeeCount] = useState(4);

  return (
    <div className="hbox space-between mt20">
      <h3 className="paragraph">Employee counter: {employeeCount}</h3>
      <button
        className="button"
        onClick={() => setEmployeeCount(employeeCount + 1)}
      >
        add Employee
      </button>
    </div>
  );
}
