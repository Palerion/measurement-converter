import React, { useState } from "react";
import "./MeasurementConverter.css";

const converter = {
  length: {
    ft: {
      m: (val) => val / 3.281,
      yd: (val) => val / 3,
    },
    m: {
      ft: (val) => val * 3.281,
      yd: (val) => val * 1.094,
    },
    yd: {
      m: (val) => val / 1.094,
      ft: (val) => val * 3,
    },
  },
  area: {
    sqft: {
      sqm: (val) => val / 10.764,
      sqyd: (val) => val / 9,
    },
    sqm: {
      sqft: (val) => val * 10.764,
      sqyd: (val) => val * 1.196,
    },
    sqyd: {
      sqm: (val) => val / 1.196,
      sqft: (val) => val * 9,
    },
  },
  volume: {
    cuft: {
      cum: (val) => val / 35.315,
      cuyd: (val) => val / 27,
    },
    cum: {
      cuft: (val) => val * 35.315,
      cuyd: (val) => val * 1.308,
    },
    cuyd: {
      cum: (val) => val / 1.308,
      cuft: (val) => val * 27,
    },
  },
};

const MeasurementConverter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [measurementType, setMeasurementType] = useState("length");
  const [inputUnit, setInputUnit] = useState("m");
  const [outputUnit, setOutputUnit] = useState("ft");

  const handleConvert = (e) => {
    e.preventDefault();
    if (!isNaN(input)) {
      setOutput(
        converter[measurementType][inputUnit][outputUnit](
          parseFloat(input)
        ).toFixed(2)
      );
    }
  };

  return (
    <div className="MeasurementConverter">
      <h2>Measurement Converter</h2>
      <form onSubmit={handleConvert}>
        <select
          value={measurementType}
          onChange={(e) => setMeasurementType(e.target.value)}
        >
          <option value="length">Length</option>
          <option value="area">Area</option>
          <option value="volume">Volume</option>
        </select>
        <input
          type="number"
          step="any"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
        >
          <option value="m">
            {measurementType === "length"
              ? "Meters"
              : measurementType === "area"
              ? "Square Meters"
              : "Cubic Meters"}
          </option>
          <option value="ft">
            {measurementType === "length"
              ? "Feet"
              : measurementType === "area"
              ? "Square Feet"
              : "Cubic Feet"}
          </option>
          <option value="yd">
            {measurementType === "length"
              ? "Yards"
              : measurementType === "area"
              ? "Square Yards"
              : "Cubic Yards"}
          </option>
        </select>
        <span>to</span>
        <select
          value={outputUnit}
          onChange={(e) => setOutputUnit(e.target.value)}
        >
          <option value="m">
            {measurementType === "length"
              ? "Meters"
              : measurementType === "area"
              ? "Square Meters"
              : "Cubic Meters"}
          </option>
          <option value="ft">
            {measurementType === "length"
              ? "Feet"
              : measurementType === "area"
              ? "Square Feet"
              : "Cubic Feet"}
          </option>
          <option value="yd">
            {measurementType === "length"
              ? "Yards"
              : measurementType === "area"
              ? "Square Yards"
              : "Cubic Yards"}
          </option>
        </select>
        <button type="submit">Convert</button>
      </form>
      <div>
        <h3>Output: {output}</h3>
      </div>
    </div>
  );
};

export default MeasurementConverter;
