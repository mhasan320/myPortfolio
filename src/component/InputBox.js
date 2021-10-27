export default function TextBox({ LabelText, ...rest }) {
  return (
    <div className="mb-6 block">
      <label
        htmlFor="fullname"
        className="text-black dark:text-white text-lg mb-3 block font-medium"
      >
        {LabelText}
      </label>
      <input
        className="form-border dark:focus:ring-2 dark:focus:ring-pink-600  dark:focus:border-transparent"
        {...rest}
      />
    </div>
  );
}
