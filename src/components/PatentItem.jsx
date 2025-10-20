export default function PatentItem({ item }) {
  return (
    <a className="patent-item" href={item.link} target="_blank" rel="noreferrer">
      <div className="patent-left">
        <div className="patent-icon">
          <img src="/patent.svg" alt="Patent icon" className="patent-icon-img" />
        </div>
        <div className="patent-text">
          <div className="patent-number">{item.number}</div>
          <div className="patent-title">{item.title}</div>
        </div>
      </div>
      <div className="patent-year">{item.year}</div>
    </a>
  );
}
