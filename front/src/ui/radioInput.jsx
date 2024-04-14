function radioInput({ label, value, name, onchange, id, checked }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 form-radio text-red-500 focus:ring-red-500"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onchange}
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export default radioInput;
