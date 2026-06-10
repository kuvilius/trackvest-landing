import Reveal from "./Reveal";

const STEPS = [
  {
    num: "STEP 01",
    title: "Add your assets",
    body: "Add each item you own with a few quick details. It takes seconds.",
    icon: <path d="M12 5v14M5 12h14" />,
  },
  {
    num: "STEP 02",
    title: "We track the value",
    body: "TrackVest fetches current market prices automatically and keeps the full history for every asset.",
    icon: <path d="M21 12a9 9 0 1 1-3-6.7M21 4v4h-4" />,
  },
  {
    num: "STEP 03",
    title: "Watch it perform",
    body: "Follow total value, top performers, allocation and returns — updated without you lifting a finger.",
    icon: <path d="M4 19V10M10 19V5M16 19v-6M22 19H2" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how" data-screen-label="How it works">
      <div className="wrap">
        <Reveal className="head center">
          <span className="eyebrow">How it works</span>
          <h2>Set it up once. It tracks itself.</h2>
        </Reveal>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal className="step" delay={(i + 1) as 1 | 2 | 3} key={s.num}>
              <span className="num">{s.num}</span>
              <span className="step-ic">
                <svg viewBox="0 0 24 24">{s.icon}</svg>
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
