interface Props {
  label: string;
  type?: string | "text";
  placeholder: string;
  required: boolean;
}

export default function AtomInputTextField(props: Props) {
  const { type = "text" } = props;

  return (
    <div className="mb-3">
      <label htmlFor={props.label} className="sr-only">
        {props.label}
      </label>
      <input
        id={props.label}
        type={type}
        autoComplete={props.label}
        required
        className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder={props.placeholder}
      />
    </div>
  );
}
