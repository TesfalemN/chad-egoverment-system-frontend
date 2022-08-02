import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

enum FormState {
    Default, 
    Address, 
    Billing, 
  }
  
 export const Form = () => {
    const [formStep, setFormStep] = useState<FormState>(FormState.Default);
    let step;
    switch (formStep) {
      case FormState.Address:
        step = <div>Address Step</div>;
        break;
      case FormState.Billing:
        step = <div>Billing Step</div>;
        break;
      case FormState.Default:
      default:
        step = <>First step</>;
        break;
    }
    return (
      <form
        style={{
          gridTemplateAreas: "'step-body' 'step-action'",
          gridTemplateRows: "auto auto",
        }}
      >
        <div style={{ gridArea: "step-body" }}>{step}</div>
        <div className="flex justify-end" style={{ gridArea: "step-action" }}>
          <Button onClick={() => setFormStep(formStep - 1)} className="mr-2">
            Back
          </Button>
          <Button onClick={() => setFormStep(formStep + 1)}>Next</Button>
        </div>
      </form>
    );
  };