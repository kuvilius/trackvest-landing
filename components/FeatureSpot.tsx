import Reveal from "./Reveal";
import DeviceFrame from "./DeviceFrame";

export type Feature = { title: string; body: string };

export default function FeatureSpot({
  id,
  eyebrow,
  title,
  features,
  screen,
  mediaSide = "right",
  background,
  screenLabel,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  features: Feature[];
  screen: { src: string; alt: string };
  mediaSide?: "left" | "right";
  background?: string;
  screenLabel?: string;
}) {
  const media = (
    <Reveal className="spot-media" delay={mediaSide === "right" ? 1 : undefined}>
      <DeviceFrame src={screen.src} alt={screen.alt} />
    </Reveal>
  );

  const copy = (
    <Reveal className="head" delay={mediaSide === "left" ? 1 : undefined} style={{ maxWidth: "none" }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <div className="feat-list">
        {features.map((f) => (
          <div className="feat" key={f.title}>
            <span className="tick">
              <svg viewBox="0 0 24 24">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span>
              <b>{f.title}</b>
              {f.body}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );

  return (
    <section
      className="section"
      id={id}
      data-screen-label={screenLabel}
      style={{
        paddingTop: "clamp(56px,7vw,100px)",
        ...(background ? { background } : {}),
      }}
    >
      <div className="wrap">
        <div className="spot">
          {mediaSide === "left" ? (
            <>
              {media}
              {copy}
            </>
          ) : (
            <>
              {copy}
              {media}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
