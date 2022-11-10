interface Props {
  label: string;
}

export default function AtomInputCheckbox(props: Props) {
  return (
    <div className="flex items-center">
      <input
        id={props.label}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label htmlFor={props.label} className="ml-2 block text-sm text-gray-900">
        {props.label}
      </label>
    </div>
  );
}
