import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useBountyForm } from "../context/BountyFormContext";
import StepLayout from "../layout/StepLayout";

export default function StepBacker() {
  const navigate = useNavigate();
  const { data, updateField } = useBountyForm();

  const [errors, setErrors] = useState({});

  const hasBacker = data.has_backer;

  const validate = () => {
    const newErrors = {};

    if (hasBacker) {
      if (!data.backer.name.trim()) {
        newErrors.name = "Backer name required";
      }
      if (!data.backer.logo.trim()) {
        newErrors.logo = "Logo URL required";
      }
    }

    if (!data.terms_accepted) {
      newErrors.terms = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = () => {
  if (!data.reward.amount || !data.reward.winners || !data.timeline.expiration_date) {
    alert("Please complete Rewards & Timeline step first.");
    navigate("/rewards");
    return;
  }
  if (!data.description|| !data.title  || !data.data.type) {
    alert("Please complete Basic Details first.");
    navigate("/");
    return;
  }

  if (!validate()) return;

  setTimeout(() => {
    navigate("/confirm");
  }, 500);
};


  const handleBack = () => navigate("/rewards");

  return (
    <StepLayout
      title="Backer Information"
      isValid={true} 
      onNext={handleSubmit}
      onBack={handleBack}
    >
      <div className="space-y-10">

        <section>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Has Backer?</h2>

            <button
              type="button"
              onClick={() => updateField("has_backer", !data.has_backer)}
              className={`w-12 h-6 rounded-full p-1 flex transition ${
                hasBacker ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white h-4 w-4 rounded-full shadow transition ${
                  hasBacker ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </section>

        {hasBacker && (
          <section className="space-y-4">

            <div>
              <label className="text-sm font-medium">Backer Name *</label>
              <input
                type="text"
                value={data.backer.name}
                onChange={(e) =>
                  updateField("backer.name", e.target.value)
                }
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">
                Backer Logo URL *
              </label>
              <input
                type="text"
                value={data.backer.logo}
                placeholder="https://logo-link.png"
                onChange={(e) =>
                  updateField("backer.logo", e.target.value)
                }
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.logo && (
                <p className="text-xs text-red-500">{errors.logo}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">
                Backer Message (optional)
              </label>
              <textarea
                rows={3}
                value={data.backer.message}
                onChange={(e) =>
                  updateField("backer.message", e.target.value)
                }
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>
        )}

        <section>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={data.terms_accepted}
              onChange={(e) =>
                updateField("terms_accepted", e.target.checked)
              }
              className="h-4 w-4 accent-blue-600"
            />
            <span className="text-sm text-gray-700">
              I accept the Terms & Conditions *
            </span>
          </label>

          {errors.terms && (
            <p className="text-xs text-red-500 mt-1">{errors.terms}</p>
          )}
        </section>
      </div>
    </StepLayout>
  );
}
