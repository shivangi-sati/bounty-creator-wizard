import { useLocation, useNavigate } from "react-router-dom";
import { useBountyForm } from "../context/BountyFormContext";

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { stepValid } = useBountyForm();  

  const steps = [
    { label: "Basics", path: "/" },
    { label: "Rewards", path: "/rewards", disabled: !stepValid.basics },
    { label: "Backer", path: "/backer", disabled: !(stepValid.basics && stepValid.rewards) },
  ];

  const goTo = (step) => {
    if (step.disabled) return;
    navigate(step.path);
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Create Bounty</h2>

      <div className="space-y-2">
        {steps.map((step) => (
          <button
            key={step.path}
            onClick={() => goTo(step)}
            disabled={step.disabled}
            className={`w-full text-left cursor-pointer px-4 py-2 rounded-lg transition
              ${
                pathname === step.path
                  ? "bg-blue-100 text-blue-700 font-semibold cursor-pointer"
                  : step.disabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100 cursor-pointer"
              }
            `}
          >
            {step.label}
          </button>
        ))}
      </div>
    </div>
  );
}
