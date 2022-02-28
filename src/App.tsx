import { useEffect, useRef, useState } from 'react';
import './App.css';

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
    }
  });

  function handleInput(event: React.FormEvent<HTMLSdxSelectElement>) {
    console.log("sdx-select changeCallback fired");
    const currentTarget = event.target as HTMLSdxSelectElement
    setSdxSelectValue(currentTarget.value);
  }

  return (
    <div className="container"> {/* .container is an SDX class */}
      <h1>SDX React Example</h1>

      <p>This repo is created by create-react-app. It uses NPM to get SDX and bundles it into your app.</p>

      <div className="row">
        <div className="col-xs col-lg-3">
          <sdx-select
            ref={sdxSelectRef}
            onInput={handleInput}
            label="What is your choice?"
            placeholder="Choose your option..."
          >
            {sdxSelectOptions.map((item) =>
              <sdx-select-option value={item} key={item}>{item}</sdx-select-option>
            )}
          </sdx-select>
        </div>

        <div className="col-xs col-lg-9">
          Selected value: {sdxSelectValue}
        </div>
      </div>

      <div className="row margin-top-3">
        <div className="col">
          <sdx-button
            label="Reset Dropdown"
            onClick={() => setSdxSelectValue([])}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
