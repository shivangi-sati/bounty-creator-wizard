import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const steps = [
    { label: "Basics", path: "/" },
    { label: "Rewards", path: "/rewards" },
    { label: "Backer", path: "/backer" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Create Bounty</h2>

      <div className="space-y-2">
        {steps.map((step) => (
          <button
            key={step.path}
            onClick={() => navigate(step.path)}
            className={`w-full text-left px-4 py-2 rounded-lg transition
              ${
                pathname === step.path
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
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

