import './Field.css';
const Field = ({
  name = "",
  labelText = "",
  type = "text",
  value = "",
  onChange = () => { },
  ...rest
}) => {
  return (
    <fieldset className="input">
      <label htmlFor={name}>{labelText}</label>
      <input type={type} name={name} id={name} value={value} onChange={onChange} {...rest} />
    </fieldset>
  );
}

export default Field;
