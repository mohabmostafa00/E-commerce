import "./styles.css";

const HeaderToggle = ({ show, setShow }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        checked={show}
        onChange={(e) => setShow(e.target.checked)}
      />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1" />
        <div className="bars" id="bar2" />
        <div className="bars" id="bar3" />
      </label>
    </div>
  );
};
export default HeaderToggle;
