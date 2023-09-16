

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon: React.ComponentType;
}

export function InputBox({ label, value, onChange, Icon, ...props }: InputBoxProps) {
  return (
    <div className="relative border-b-[1px] border-slate-50 w-[300px] my-8">
      <span className="absolute right-2 text-slate-50 top-5">
        <Icon />
      </span>
      <input className="peer w-full h-12 text-base pr-9 pl-1 text-slate-50 bg-transparent border-none outline-none"
        value={value}
        onChange={onChange}
        required
        {...props}
      />
      <label className="peer-valid:-top-2 peer-focus:-top-2 peer-valid:text-xs peer-focus:text-xs duration-200 absolute left-1 top-2/4 -translate-y-2/4 text-slate-50 pointer-events-none">{label}</label>
    </div>
  );
}
