import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useBountyForm } from "../context/BountyFormContext";
import StepLayout from "../layout/StepLayout";

const currencyOptions = ["USD", "EUR", "INR", "GBP"];
const sdgOptions = [
  "No Poverty",
  "Zero Hunger",
  "Good Health and Well-being",
  "Quality Education",
  "Gender Equality",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
];

export default function RewardsStep() {
  const navigate = useNavigate();
  const { data, updateField } = useBountyForm();

  const reward = data.reward;
  const timeline = data.timeline;
  const estimated = data.timeline.estimated_completion;

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!reward.currency) newErrors.currency = "Select currency";
    if (!reward.amount || Number(reward.amount) <= 0)
      newErrors.amount = "Amount must be > 0";
    if (!reward.winners || Number(reward.winners) <= 0)
      newErrors.winners = "At least 1 winner";

    if (!timeline.expiration_date)
      newErrors.expiration_date = "Expiration date required";

    if (data.hasImpactCertificate && !data.impactBriefMessage.trim()) {
      newErrors.impactBriefMessage = "Impact brief required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

 const handleNext = () => {
   if (!data.description|| !data.title  || !data.data.type) {
    alert("Please complete Basic Details first.");
    navigate("/");
    return;
  }
  if (validate()) {
    setStepValid(prev => ({ ...prev, rewards: true }));
    navigate("/backer");
  }
};


  const handleBack = () => navigate("/");

  const toggleSDG = (sdg) => {
    const isSelected = data.sdgs.includes(sdg);

    const updated = isSelected
      ? data.sdgs.filter((x) => x !== sdg)
      : [...data.sdgs, sdg];

    updateField("sdgs", updated);
  };

  return (
    <StepLayout
      title="Rewards & Timeline"
      isValid={true}
      onNext={handleNext}
      onBack={handleBack}
    >
      <div className="space-y-10">

        <section>
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Reward</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div>
              <label className="text-sm font-medium">Currency *</label>
              <select
                value={reward.currency}
                onChange={(e) => updateField("reward.currency", e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                {currencyOptions.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              {errors.currency && (
                <p className="text-xs text-red-500">{errors.currency}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Amount *</label>
              <input
                type="number"
                value={reward.amount}
                onChange={(e) => updateField("reward.amount", e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.amount && (
                <p className="text-xs text-red-500">{errors.amount}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Winners *</label>
              <input
                type="number"
                value={reward.winners}
                onChange={(e) => updateField("reward.winners", e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.winners && (
                <p className="text-xs text-red-500">{errors.winners}</p>
              )}
            </div>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Timeline</h2>

          <div className="max-w-xs">
            <label className="text-sm font-medium">Expiration Date *</label>
            <input
              type="date"
              value={timeline.expiration_date}
              onChange={(e) =>
                updateField("timeline.expiration_date", e.target.value)
              }
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {errors.expiration_date && (
              <p className="text-xs text-red-500">{errors.expiration_date}</p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mt-6">
            <div>
              <label className="text-xs text-slate-500">Days</label>
              <input
                type="number"
                value={estimated.days}
                onChange={(e) =>
                  updateField("timeline.estimated_completion.days", e.target.value)
                }
                className="mt-1 px-3 py-2 border rounded-md w-full"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500">Hours</label>
              <input
                type="number"
                value={estimated.hours}
                onChange={(e) =>
                  updateField("timeline.estimated_completion.hours", e.target.value)
                }
                className="mt-1 px-3 py-2 border rounded-md w-full"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500">Minutes</label>
              <input
                type="number"
                value={estimated.minutes}
                onChange={(e) =>
                  updateField(
                    "timeline.estimated_completion.minutes",
                    e.target.value
                  )
                }
                className="mt-1 px-3 py-2 border rounded-md w-full"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Impact Certificate</h2>

            <button
              type="button"
              onClick={() =>
                updateField("hasImpactCertificate", !data.hasImpactCertificate)
              }
              className={`w-12 h-6 rounded-full p-1 flex transition ${
                data.hasImpactCertificate ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white h-4 w-4 rounded-full shadow transition ${
                  data.hasImpactCertificate ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          {data.hasImpactCertificate && (
            <div className="mt-4 max-w-md">
              <label className="text-sm font-medium">Impact Brief *</label>
              <input
                type="text"
                value={data.impactBriefMessage}
                onChange={(e) => updateField("impactBriefMessage", e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.impactBriefMessage && (
                <p className="text-xs text-red-500">
                  {errors.impactBriefMessage}
                </p>
              )}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">SDGs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {sdgOptions.map((sdg) => {
              const isSelected = data.sdgs.includes(sdg);

              return (
                <div
                  key={sdg}
                  onClick={() => toggleSDG(sdg)}
                  className={`px-3 py-2 border rounded-md cursor-pointer flex items-center gap-2
                    ${
                      isSelected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }
                  `}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    readOnly
                    className="accent-blue-600"
                  />
                  <span>{sdg}</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </StepLayout>
  );
}
