function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        className="textField__input"
        type="number"
        name={name}
      />
    </div>
  );
}
export default TextField;
