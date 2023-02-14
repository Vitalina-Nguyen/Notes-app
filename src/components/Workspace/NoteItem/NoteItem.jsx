import React from "react";


export default function Workspace({activeNote}) {

  return (
    <div>
        <h2>
            {activeNote.title};
        </h2>
        <p>
            {activeNote.text};
        </p>
    </div>
  );
}