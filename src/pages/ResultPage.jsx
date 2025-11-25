import { useLocation, useNavigate } from "react-router-dom";

export default function ResultPage() {
  const { state: payload } = useLocation();
  const navigate = useNavigate();

  if (!payload) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold mb-4">No Data Found</h1>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-14 px-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        💥 Bounty Created Successfully!
      </h1>

      <p className="text-slate-600 mb-6">
        Below is the final JSON payload submitted to the server:
      </p>

     
      <pre className="bg-gray-900 text-green-300 p-6 rounded-lg overflow-x-auto text-sm leading-6 shadow-lg">
        {JSON.stringify(payload, null, 2)}
      </pre>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Create Another Bounty
        </button>

        <button
          onClick={() => navigator.clipboard.writeText(JSON.stringify(payload, null, 2))}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md"
        >
          Copy JSON
        </button>
      </div>
    </div>
  );
}
