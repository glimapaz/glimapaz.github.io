import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

function isImagePath(str) {
  if (typeof str !== "string") return false;
  if (/^https?:\/\//i.test(str) || str.startsWith("/")) return true;
  return /\.(svg|png|jpe?g|webp)$/i.test(str);
}

export default function ExperienceItem({ item }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    setHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <div className="xp-item">
      <button
        className="xp-row"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`xp-${item.id}`}
      >
        <div className="xp-left">
          <div className="xp-logo" aria-hidden>
            {isImagePath(item.logo) ? (
              <img src={item.logo} alt={item.company} className="xp-logo-img" />
            ) : (
              item.logo
            )}
          </div>
          <div>
            <div className="xp-company">{item.company}</div>
            <div className="xp-role">{item.role}</div>
          </div>
        </div>

        <div className="xp-right">
          <div className="xp-period">{item.period}</div>
          <div className="xp-loc">{item.location}</div>
        </div>

        <FiChevronDown className={`xp-caret ${open ? "rot" : ""}`} />
      </button>

      <div
        id={`xp-${item.id}`}
        className="xp-content"
        style={{ maxHeight: height }}
      >
        <div ref={contentRef} className="xp-inner">
          <ul>
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
