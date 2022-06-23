import React from "react";
import "./progress.css";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

export default function Progress() {
  const step1Content = <h1></h1>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <div className="App">
      <StepProgressBar
        startingStep={1}
        steps={[
          {
            label: "Захиалга баталгаажсан",
            name: "order-done",
            content: step1Content
          },
          {
            label: "Хүргэлтэд гарсан",
            name: "delivering",
            content: step3Content,
            validator: step2Validator
          },
          {
            label: "Хүргэгдсэн",
            name: "delivered",
            content: step3Content
          }
        ]}
      />
    </div>
  );
}