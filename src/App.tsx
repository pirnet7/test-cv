import React from 'react';
import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
  const sdxSelectOptions = ['Option 1', 'Option 2'];
  const [sdxSelectValue, setSdxSelectValue] = useState<string[]>([]);
  const sdxSelectRef = useRef<HTMLSdxSelectElement>(null);

  useEffect(() => {
    // The ref might change while it's being processed,
    // therefore store the reference temporarily
    const currentRef = sdxSelectRef.current;

    if (currentRef) {
      currentRef.value = sdxSelectValue; // sync state and ref (value can't be bound to sdx-select element)

      // Attach the callback function to the ref
      currentRef.changeCallback = value => {
        console.log("sdx-select changeCallback fired");
        setSdxSelectValue(value);
      }
    }
  })

  return (
      <div className="margin-1" /* margin-1 is a SDX css class */>
        <h1>SDX React Example</h1>
        <p>This repo is created by create-react-app. It uses NPM to get SDX and bundles it to your app.</p>
        <p className="SelectWrapper">
          <sdx-select
              ref={sdxSelectRef}
              placeholder="Please choose a option:"
          >
            {
              sdxSelectOptions.map((item) => {
                return (
                    <sdx-select-option value={item} key={item}>{item}</sdx-select-option>
                )
              })
            }
          </sdx-select>
          <span className="margin-1">Selected value: {sdxSelectValue}</span>
        </p>
        <sdx-button
            label="Reset Dropdown"
            onClick={() => setSdxSelectValue([])}
        />
      </div>
  );
}

export default App;
