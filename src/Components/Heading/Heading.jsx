import "./styles.css";

function Heading({ title, prefix }) {
  return (
    <div className="page-heading">
      <h2>
        {prefix} {title}
      </h2>
    </div>
  );
}

export default Heading;
