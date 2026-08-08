import { profile } from "@/data/portfolio";

const HUMAN = "https://i.imgur.com/kp7x19J.png";
const ROBOT = "https://i.imgur.com/GJDPoNN.png";

export function HudPortrait() {
  return (
    <div className="hud-portrait group" aria-label={`Portrait of ${profile.name}`}>
      <div className="hud-frame">
        {/* base portrait */}
        <img src={HUMAN} alt={`Portrait of ${profile.name}`} className="hud-img hud-human" />
        {/* rgb glitch ghosts of the base portrait */}
        <img src={HUMAN} alt="" aria-hidden className="hud-img hud-ghost hud-ghost-r" />
        <img src={HUMAN} alt="" aria-hidden className="hud-img hud-ghost hud-ghost-c" />
        {/* robotic portrait */}
        <img src={ROBOT} alt="" aria-hidden className="hud-img hud-robot" />

        {/* HUD overlay */}
        <div className="hud-overlay" aria-hidden>
          <span className="hud-bracket hud-bracket-tl" />
          <span className="hud-bracket hud-bracket-tr" />
          <span className="hud-bracket hud-bracket-bl" />
          <span className="hud-bracket hud-bracket-br" />

          <span className="hud-reticle">
            <span className="hud-reticle-ring" />
            <span className="hud-reticle-arc" />
          </span>

          <span className="hud-scanline" />
          <span className="hud-grid" />

          <span className="hud-label hud-label-tl">ID · AL-0417</span>
          <span className="hud-label hud-label-tr">SYS · ONLINE</span>
          <span className="hud-label hud-label-bl">BIOMETRIC LOCK</span>
          <span className="hud-label hud-label-br">AUG · 87%</span>
        </div>
      </div>
    </div>
  );
}
