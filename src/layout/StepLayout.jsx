import { NavLink } from "react-router-dom";

export default function StepLayout({
  title,
  children,
  onBack,
  onNext,
  isValid = true,
  nextLabel = "Next",
  disableNext = false,
}) {
  const currentStep = window.location.pathname.includes("backer")
    ? 3
    : window.location.pathname.includes("rewards")
    ? 2
    : 1;

  return (
    <div className="flex bg-gray-50 h-screen">

      <aside className="w-64 bg-white border-r p-8 fixed left-0 top-0 h-full ">
        <h2 className="text-xl font-semibold mb-6">Bounty Steps</h2>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-blue-100 text-blue-600" : "text-gray-700"
              }`
            }
          >
            1. Basics
          </NavLink>

          <NavLink
            to="/rewards"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-blue-100 text-blue-600" : "text-gray-700"
              }`
            }
          >
            2. Rewards
          </NavLink>

          <NavLink
            to="/backer"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-blue-100 text-blue-600" : "text-gray-700"
              }`
            }
          >
            3. Backer
          </NavLink>
        </nav>
      </aside>

   
      <main className="flex-1 ml-64 px-12 py-10">

        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            {[1, 2, 3].map((num) => {
              const isActive = currentStep === num;
              const isCompleted = currentStep > num;

              return (
                <div key={num} className="flex items-center gap-3">
                  <div
                    className={`
                      w-8 h-8 flex items-center justify-center rounded-full 
                      text-sm font-semibold border transition-all duration-200
                      ${
                        isActive
                          ? "bg-blue-600 border-blue-600 text-white shadow-md"
                          : isCompleted
                          ? "bg-blue-100 border-blue-300 text-blue-700"
                          : "bg-white border-gray-300 text-gray-500"
                      }
                    `}
                  >
                    {num}
                  </div>

                  {num !== 3 && (
                    <div
                      className={`w-8 h-0.5 ${
                        isCompleted ? "bg-blue-400" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <h1 className="text-3xl font-semibold mb-6 text-slate-900">{title}</h1>

        <div className="bg-white p-8 rounded-xl shadow-sm border">
          {children}
        </div>

        <div className="flex justify-between mt-10 pb-10">
          {onBack ? (
            <button
              onClick={onBack}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}

          {onNext && (
            <button
              disabled={!isValid || disableNext}
              onClick={onNext}
              className={`px-6 py-2 rounded-lg text-white font-medium 
                ${
                  !isValid || disableNext
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {nextLabel}
            </button>
          )}
        </div>

      </main>
    </div>
  );
}


