
interface TextInput {
    labelMainClass?: string;
    labelText?: string;
    labelClass?: string;
    id?: string;
    inputClass?: string;
    inputType?: "text" | "number" | "checkbox";
    inputName?: string;
    placeholder?: string;
    onchange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({
    labelMainClass,
    labelText,
    labelClass,
    id,
    inputClass,
    inputType,
    inputName,
    placeholder,
    onchange,
}: TextInput) => {
    return (
        <div className={labelMainClass}>
            <label
                htmlFor={inputName}
                className={labelClass}
            >
                {labelText}
            </label>
            <input
                type={inputType}
                id={id}
                className={inputClass}
                name={inputName}
                placeholder={placeholder}
                onChange={onchange}
            />
        </div>
    )
}

export default TextInput;