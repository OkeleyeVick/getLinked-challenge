import Icon from "./Icon";

const InputField = ({ customStyle, label, name, inputMode, icon, type, placeholder, value, onChangeFunc, variantPlaceholder }) => {
	return (
		<div className="shadow-md">
			{label && (
				<label className="text-[.8rem] tracking-wide font-medium capitalize" htmlFor={label?.toLowerCase()}>
					{label}
				</label>
			)}
			<div className="relative group mt-2 isolate">
				<input
					autoComplete="off"
					name={name}
					className={`${
						customStyle
							? customStyle
							: "transition ease-in-out duration-300 font-normal placeholder:[word-spacing:1px] placeholder:text-[.76rem] rounded-[3.5px] px-5 bg-white/[0.035]  focus:border-secondary placeholder:tracking-wide placeholder:font-medium w-full outline-none focus:outline-none caret-secondary border-[1.5px] border-white/70 text-[.8rem] min-h-[3rem]"
					} ${icon ? "pr-0" : "px-4"} ${variantPlaceholder ? "placeholder:text-white/95" : "placeholder:text-white/40"}`}
					type={type}
					onChange={onChangeFunc}
					placeholder={placeholder}
					value={value}
					inputMode={inputMode ?? "text"}
					id={label?.toLowerCase()}
					required
				/>
				{icon && (
					<Icon
						iconName={icon}
						style="absolute right-3 text-white -translate-y-1/2 top-1/2 h-6 w-6 cursor-pointer select-none z-[-1] group-focus-within:text-primary-dark duration-500 group-focus-within:-rotate-180 transition"
					/>
				)}
			</div>
		</div>
	);
};

export default InputField;
