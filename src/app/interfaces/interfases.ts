export interface SlideObjectInterface {
    rating: number;
    author: string;
    data: string;
    comment: string;
}

export interface ButtonProps {
    text?: string | undefined
    onClick?: any | undefined
    burgerImg?: string | undefined
    alt?: string | undefined
    className?: string
    type: "button" | "submit"
}