import { useState } from "react";

export default function Customer() {
  const [customerCount, setCustomerCount] = useState(32);

  return (
    <div className="hbox space-between mt20">
      <h3 className="paragraph">Customer counter: {customerCount}</h3>
      <button
        className="button"
        onClick={() => setCustomerCount(customerCount + 1)}
      >
        add Customer
      </button>
    </div>
  );
}
