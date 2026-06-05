import { useEffect, useState } from "react";
import "./scrolltop.scss";
import { scrollToTop } from "../../lib/scroll";

/*
 * Compact "back to top" button. Appears once the visitor has scrolled
 * past the first viewport. `variant` themes it ("terminal" | "simple").
 */
const ScrollTopButton = ({ variant = "terminal" }) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scrolltop scrolltop--${variant} ${shown ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
      tabIndex={shown ? 0 : -1}
    >
      {variant === "terminal" ? (
        <span className="scrolltop__label" aria-hidden="true">
          cd ~<span className="caret">↑</span>
        </span>
      ) : (
        <span className="scrolltop__label" aria-hidden="true">
          <span className="caret">↑</span> Top
        </span>
      )}
    </button>
  );
};

export default ScrollTopButton;
