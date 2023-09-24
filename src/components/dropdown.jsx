import { forwardRef } from "react";
import Icon from "./Icon";

const Select = forwardRef(
	(
		{ customStyle, name, label, inputMode, icon, type, placeholder, value, func, onChangeFunc, variantPlaceholder, dropdown, dropdownData },
		inputRef
	) => {
		function selectValue(index) {
			func((prevState) => {
				return {
					...prevState,
					[name]: index,
				};
			});
		}

		return (
			<div className="relative">
				{label && (
					<label className="text-[.8rem] tracking-wide font-medium capitalize" htmlFor={label?.toLowerCase()}>
						{label}
					</label>
				)}
				<div className="relative group mt-2 shadow-md ">
					<input
						autoComplete="off"
						name={name}
						ref={inputRef && inputRef}
						className={`${
							customStyle
								? customStyle
								: "transition ease-in-out duration-300 font-normal placeholder:[word-spacing:1px] placeholder:text-[.76rem] rounded-[3.5px] px-5 pr-10 bg-white/[0.035] overflow-hidden focus:border-secondary placeholder:tracking-wide placeholder:font-medium w-full outline-none focus:outline-none caret-secondary border-[1.5px] border-white/70 text-[.8rem] min-h-[3rem]"
						}  ${variantPlaceholder ? "placeholder:text-white/95" : "placeholder:text-white/40"}`}
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
							style="absolute right-3 text-white -translate-y-1/2 top-1/2 h-6 w-6 cursor-pointer group-focus-within:text-primary-dark duration-500 group-focus-within:-rotate-180 transition "
						/>
					)}
					{dropdown && dropdownData && (
						<div
							className="translate-y-4 absolute group-focus-within:opacity-100 opacity-0 invisible group-focus-within:visible bg-dark
          overflow-hidden group-focus-within:translate-y-1  w-full border border-secondary rounded z-[10] h-[210px]">
							<ul className="overflow-y-auto  relative z-[20] v-scroll bg-dark h-full py-1 px-2 overflow-x-hidden ">
								{dropdownData.map((data, index) => (
									<li
										onClick={() => selectValue(index + 1)}
										className="whitespace-nowrap overflow-hidden font-medium text-ellipsis cursor-pointer py-3 hover:border-white/40 hover:bg-white/[0.01] border border-solid border-transparent rounded-[1px] px-3 text-[.7rem]"
										key={index}>
										{data}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		);
	}
);

export default Select;

export const GroupSize = forwardRef(
	(
		{ customStyle, name, label, inputMode, icon, type, placeholder, value, func, onChangeFunc, variantPlaceholder, dropdown, dropdownData },
		inputRef
	) => {
		function selectValue(index) {
			func((prevState) => {
				return {
					...prevState,
					[name]: index,
				};
			});
		}

		return (
			<div className="relative">
				{label && (
					<label className="text-[.8rem] tracking-wide font-medium capitalize" htmlFor={label?.toLowerCase()}>
						{label}
					</label>
				)}
				<div className="relative group mt-2 shadow-md ">
					<input
						autoComplete="off"
						name={name}
						ref={inputRef && inputRef}
						className={`${
							customStyle
								? customStyle
								: "transition ease-in-out duration-300 font-normal placeholder:[word-spacing:1px] placeholder:text-[.76rem] rounded-[3.5px] px-5 pr-10 bg-white/[0.035] overflow-hidden focus:border-secondary placeholder:tracking-wide placeholder:font-medium w-full outline-none focus:outline-none caret-secondary border-[1.5px] border-white/70 text-[.8rem] min-h-[3rem]"
						}  ${variantPlaceholder ? "placeholder:text-white/95" : "placeholder:text-white/40"}`}
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
							style="absolute right-3 text-white -translate-y-1/2 top-1/2 h-6 w-6 cursor-pointer group-focus-within:text-primary-dark duration-500 group-focus-within:-rotate-180 transition "
						/>
					)}
					{dropdown && dropdownData && (
						<div
							className="translate-y-4 absolute group-focus-within:opacity-100 opacity-0 invisible group-focus-within:visible bg-dark
          overflow-hidden group-focus-within:translate-y-1  w-full border border-secondary rounded z-[10] h-[210px]">
							<ul className="overflow-y-auto  relative z-[20] v-scroll bg-dark h-full py-1 px-2 overflow-x-hidden ">
								{dropdownData.map((data, index) => (
									<li
										onClick={() => selectValue(data)}
										className="whitespace-nowrap overflow-hidden font-medium text-ellipsis cursor-pointer py-3 hover:border-white/40 hover:bg-white/[0.01] border border-solid border-transparent rounded-[1px] px-3 text-[.7rem]"
										key={index}>
										{data}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		);
	}
);
