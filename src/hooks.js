import { useState } from "react";


export function useForm(initial, validate) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const bind = (name) => ({
    name, value: values[name], error: errors[name],
    onChange: (e) => setValues((v) => ({ ...v, [name]: e.target.value })),
  });
  const submit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setDone(Object.keys(errs).length === 0);
  };
  return { bind, submit, done };
}
