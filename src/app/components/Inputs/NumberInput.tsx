import { withMask } from 'use-mask-input';

interface NumberInput {
    labelMainClass?: string;
    labelText?: string;
    labelClass?: string;
    id?: string;
    inputClass?: string;
    inputType?: "text" | "number" | "checkbox";
    inputName?: string;
    placeholder?: string;
    onchange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
}

const NumberInput = ({
    labelMainClass,
    labelText,
    labelClass,
    id,
    inputClass,
    inputType,
    inputName,
    placeholder,
    onchange,
    value,
}: NumberInput) => {
    return (
        <div className={labelMainClass}>
            <label
                htmlFor={inputName}
                className={labelClass}
            >
                {labelText}
            </label>
            <input
                value={value}
                placeholder={placeholder}
                onChange={onchange}
                id={id}
                className={inputClass}
                name={inputName} type={inputType} 
            />
        </div>
    )
}

export default NumberInput;