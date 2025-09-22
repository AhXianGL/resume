export default function FirmBlock({ name, timeRange, content }) {
  return (
    <div className="firm-block-wrapper">
      <div className="title">
        <span className="firm-name">{name}</span>
        <span>{timeRange}</span>
      </div>
      <div className="description">
        <ul>
          {content.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
