import React from "react";
import Tip from "./Tip";

export default function TipList({tips}) {

  return (
    <ul className="tip-list">
      {tips.length === 0 ? (
        <li>No Tips Listed. (Add a Tip)</li>
      ) : (
        tips.map(tip => (
          <Tip
            key={tip.date}
            {...tip}
          />
        ))
      )}
    </ul>
  );
}
