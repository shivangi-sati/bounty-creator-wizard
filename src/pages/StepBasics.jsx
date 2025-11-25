import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBountyForm } from "../context/BountyFormContext";
import StepLayout from "../layout/StepLayout";

const BOUNTY_TYPES = ["Content", "Design", "Development", "Marketing", "Other"];
const DOMINANT_CORES = ["Water", "Earth", "Social", "Energy"];

export default function StepBasics() {
  const navigate = useNavigate();
  const { data, updateField,stepValid, setStepValid } = useBountyForm();

  const [errors, setErrors] = useState({});
  const mode = data.mode || "digital";

  const validate = () => {
    const newErrors = {};

    if (!data.title || !data.title.trim()) {
      newErrors.title = "Title is required";
    } else if (data.title.trim().length > 40) {
      newErrors.title = "Max length is 40 characters";
    }

    if (!data.description || !data.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!data.type) newErrors.type = "Type is required";
    if (!data.dominant_core) newErrors.dominant_core = "Core is required";
    if (mode === "physical" && (!data.location || !data.location.trim())) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 


const nextStep = () => {
  if (validate()) {
    setStepValid(prev => ({ ...prev, basics: true }));
    navigate("/rewards");
  }
};


  return (
    <StepLayout
      title="Basic Details"
      isValid={true} 
      onNext={nextStep}
      hideBack
    >
      <form className="space-y-6">

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Bounty Title *
          </label>
          <input
            type="text"
            maxLength={40}
            value={data.title || ""}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="e.g. Build a landing page for our climate campaign"
            className={`w-full rounded-lg px-3 py-2 border 
              ${errors.title ? "border-red-500" : "border-gray-300"} 
              focus:ring-2 focus:ring-blue-500`}
          />
          <div className="flex justify-between text-xs mt-1">
            <span className="text-red-500">{errors.title}</span>
            <span className="text-gray-500">{data.title?.length || 0}/40</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Bounty Description *
          </label>
          <textarea
            rows={4}
            value={data.description || ""}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Describe what you expect, scope, context..."
            className={`w-full rounded-lg px-3 py-2 border 
              ${errors.description ? "border-red-500" : "border-gray-300"} 
              focus:ring-2 focus:ring-blue-500`}
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Bounty Type *
            </label>
            <select
              value={data.type || ""}
              onChange={(e) => updateField("type", e.target.value)}
              className={`w-full rounded-lg px-3 py-2 border bg-white
                ${errors.type ? "border-red-500" : "border-gray-300"}
                focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Select type</option>
              {BOUNTY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            {errors.type && (
              <p className="text-red-500 text-xs mt-1">{errors.type}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Dominant Impact Core *
            </label>
            <select
              value={data.dominant_core || ""}
              onChange={(e) => updateField("dominant_core", e.target.value)}
              className={`w-full rounded-lg px-3 py-2 border bg-white
                ${errors.dominant_core ? "border-red-500" : "border-gray-300"}
                focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Select core</option>
              {DOMINANT_CORES.map((core) => (
                <option key={core}>{core}</option>
              ))}
            </select>
            {errors.dominant_core && (
              <p className="text-red-500 text-xs mt-1">{errors.dominant_core}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Bounty Mode *
          </label>
          <div className="inline-flex p-1 bg-gray-100 border rounded-full">
            <button
              type="button"
              onClick={() => updateField("mode", "digital")}
              className={`px-4 py-1 rounded-full transition 
              ${
                mode === "digital"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Digital
            </button>

            <button
              type="button"
              onClick={() => updateField("mode", "physical")}
              className={`px-4 py-1 rounded-full transition 
              ${
                mode === "physical"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Physical
            </button>
          </div>
        </div>

        {mode === "physical" && (
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Location *
            </label>
            <input
              type="text"
              value={data.location || ""}
              onChange={(e) => updateField("location", e.target.value)}
              placeholder="e.g. Bangalore, India"
              className={`w-full px-3 py-2 rounded-lg border 
                ${errors.location ? "border-red-500" : "border-gray-300"}
                focus:ring-2 focus:ring-blue-500`}
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">{errors.location}</p>
            )}
          </div>
        )}
      </form>
    </StepLayout>
  );
}

