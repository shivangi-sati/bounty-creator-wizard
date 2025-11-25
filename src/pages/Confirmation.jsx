import { useNavigate } from "react-router-dom";
import StepLayout from "../layout/StepLayout";
import { useBountyForm } from "../context/BountyFormContext";
import { useState } from "react";

export default function Confirmation() {
  const navigate = useNavigate();
  const { data } = useBountyForm();

  const [loading, setLoading] = useState(false);


  const finalPayload = {
    title: data.title,
    description: data.description,
    type: data.type,
    dominant_core: data.dominant_core,
    mode: data.mode,
    location: data.mode === "physical" ? data.location : null,
    reward: data.reward,
    timeline: data.timeline,
    hasImpactCertificate: data.hasImpactCertificate,
    impactBriefMessage: data.hasImpactCertificate
      ? data.impactBriefMessage
      : null,
    sdgs: data.sdgs,
    has_backer: data.has_backer,
    backer: data.has_backer ? data.backer : null,
    terms_accepted: data.terms_accepted,
  };

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/result", { state: finalPayload });
    }, 1500);
  };

  return (
    <StepLayout
      title="Review & Confirm"
      isValid={true}
      onBack={() => navigate("/backer")}
      onNext={handleSubmit}
      nextLabel={loading ? "Submitting..." : "Create Bounty"}
      disableNext={loading}
    >
      <div className="space-y-10 text-slate-800">

  
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Details</h2>

          <div className="space-y-2">
            <p><strong>Title:</strong> {data.title}</p>
            <p><strong>Description:</strong> {data.description}</p>
            <p><strong>Type:</strong> {data.type}</p>
            <p><strong>Impact Core:</strong> {data.dominant_core}</p>
            <p>
              <strong>Mode:</strong> {data.mode}
              {data.mode === "physical" && <span> — {data.location}</span>}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Reward</h2>

          <div className="space-y-2">
            <p><strong>Currency:</strong> {data.reward.currency}</p>
            <p><strong>Amount:</strong> {data.reward.amount}</p>
            <p><strong>Winners:</strong> {data.reward.winners}</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Timeline</h2>

          <div className="space-y-2">
            <p>
              <strong>Expiration Date:</strong>{" "}
              {data.timeline.expiration_date}
            </p>

            <p>
              <strong>Estimated Completion:</strong>{" "}
              {data.timeline.estimated_completion.days || 0}d /
              {data.timeline.estimated_completion.hours || 0}h /
              {data.timeline.estimated_completion.minutes || 0}m
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Impact Certificate</h2>

          {data.hasImpactCertificate ? (
            <>
              <p><strong>Issued:</strong> Yes</p>
              <p><strong>Brief:</strong> {data.impactBriefMessage}</p>
            </>
          ) : (
            <p>No Impact Certificate</p>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">SDGs</h2>

          {data.sdgs.length > 0 ? (
            <ul className="list-disc pl-6">
              {data.sdgs.map((sdg) => (
                <li key={sdg}>{sdg}</li>
              ))}
            </ul>
          ) : (
            <p>No SDGs selected</p>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Backer Information</h2>

          {data.has_backer ? (
            <div className="space-y-2">
              <p><strong>Name:</strong> {data.backer.name}</p>
              <p><strong>Logo:</strong> {data.backer.logo}</p>
              <p><strong>Message:</strong> {data.backer.message || "—"}</p>
            </div>
          ) : (
            <p>No Backer</p>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Terms</h2>
          <p>
            {data.terms_accepted
              ? "✔ You have accepted the terms."
              : "❌ Terms not accepted."}
          </p>
        </section>

      </div>
    </StepLayout>
  );
}
