function Input({ type = "text", placeholder = "example", name}) {
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      id={name}
    />
  );
}

export default Input;
