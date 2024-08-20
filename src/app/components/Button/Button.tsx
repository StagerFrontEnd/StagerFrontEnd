import Image from "next/image";

interface ButtonProps {
    text?: string | undefined
    onClick?: any | undefined
    burgerImg?: string | undefined
    alt?: string | undefined
    className?: string
    type: "button" | "submit"
}

const Button = ({ text, onClick, burgerImg, alt, className, type }: ButtonProps): JSX.Element => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {text}
            {burgerImg && (
                <Image
                    src={burgerImg!}
                    alt={alt!}
                    priority={true}
                />
            )}
        </button>
    )
}

export default Button;