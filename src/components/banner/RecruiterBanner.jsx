import "./banner.scss";

/*
 * Loud, friendly bar pinned to the very top of the terminal site.
 * Clicking it drops the visitor into the plain recruiter view.
 */
const RecruiterBanner = ({ onSwitch }) => {
  return (
    <button type="button" className="recruiter-banner" onClick={onSwitch}>
      <span className="recruiter-banner__glow" aria-hidden="true" />
      <span className="recruiter-banner__text">
        <strong>Here for my boring facts only?</strong>
        <span className="" aria-hidden="true"> </span>
        Tired of devs cosplaying as hackers in a fake terminal?
      </span>
      <span className="recruiter-banner__cta">
        Give me the plain version
        <span className="arrow" aria-hidden="true">→</span>
      </span>
    </button>
  );
};

export default RecruiterBanner;
