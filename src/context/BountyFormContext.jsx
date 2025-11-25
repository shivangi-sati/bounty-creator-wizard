import { createContext, useContext, useState } from "react";

const BountyFormContext = createContext();

export const BountyFormProvider = ({ children }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    type: "",
    dominant_core: "",
    mode: "digital",
    location: "",

    reward: {
      currency: "USD",
      amount: "",
      winners: "",
    },

    timeline: {
      expiration_date: "",
      estimated_completion: {
        days: "",
        hours: "",
        minutes: "",
      },
    },

    hasImpactCertificate: false,
    impactBriefMessage: "",
    sdgs: [],

    has_backer: false,
    backer: {
      name: "",
      logo: "",
      message: "",
    },

    terms_accepted: false,
  });


  const updateField = (path, value) => {
    setData((prev) => {
      const updated = structuredClone(prev);
      const keys = path.split(".");

      let obj = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;

      return updated;
    });
  };

  return (
    <BountyFormContext.Provider value={{ data, updateField }}>
      {children}
    </BountyFormContext.Provider>
  );
};

export const useBountyForm = () => useContext(BountyFormContext);
