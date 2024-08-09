"use client";

import TextInput from "../Inputs/TextInput";
import Button from "../Button/Button";
import styles from "./OrderCall.module.scss";
import { z } from "zod";
import { useState, ChangeEvent } from "react";
import NumberInput from "../Inputs/TextInput";
import { ZodErrors } from "../custom/ZodErrors";

const schema = z.object({
    name: z.string()
        .min(2, { message: "Your name must be beetween 2 and 25 characters" })
        .regex(/^(?!.*\d).*/, { message: "Name must don`t contain numbers" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Name must contain only letters" })
        .regex(/^[^\s]/, { message: "Please delete space in the start of pole above" })
        .max(25, { message: "Your name must be beetween 2 and 25 characters" }),
    phone: z.string()
        .min(12, { message: "Length of phone number is less than 12 symbols (with +)" })
        .regex(/^\+1\d{3}\d{3}\d{4}$/, { message: "Invalid phone number format. Expected format: +1 408 000 0000" }),
});

type FormData = z.infer<typeof schema>;

const OrderCall = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<Partial<FormData>>({});
    const [errors, setErrors] = useState<FormData>({ name: '', phone: '' });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;

        setFormData((prevFormData) => {
            const newFormData = { ...prevFormData, [name]: value };
            
            try {
                schema.shape[name as keyof typeof schema.shape].parse(value);
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: '',
                }));
            } catch (error) {
                const issue = (error as z.ZodError).issues.find(
                    (issue) => issue.path[0] = name
                );
                setErrors((errors) => ({
                    ...errors,
                    [name]: issue?.message || '',
                }));
            }
            console.log(formData.phone);
            return newFormData;
        });
    };

    const submitOrderForCall = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            schema.parse(formData);
            alert("Success")
        } catch (error) {
            alert("Failed")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className={styles.orderCall}>
            <h2 className={styles.orderCall__heading}>Order a call</h2>
            <form method="post" className={styles.orderCallForm}>
                <TextInput
                    labelMainClass={styles.orderCallForm__labelMainClass}
                    inputName={"name"}
                    labelText={"Your name"}
                    labelClass={styles.orderCallForm__labelClass}
                    id={"name"}
                    inputClass={styles.orderCallForm__inputClass}
                    inputType={"text"}
                    placeholder={"name"}
                    onchange={handleInputChange}
                />
                {errors.name && <ZodErrors error={errors.name} ></ZodErrors>}
                <NumberInput
                    labelMainClass={styles.orderCallForm__labelMainClass}
                    inputName={"phone"}
                    labelText={"Your phone"}
                    labelClass={styles.orderCallForm__labelClass}
                    id={"phone"}
                    inputClass={styles.orderCallForm__inputClass}
                    inputType={"text"}
                    placeholder={"+1 408 000 0000"}
                    onchange={handleInputChange}
                    // value={formData.phone}
                />
                {errors.phone && <ZodErrors error={errors.phone} ></ZodErrors>}
                <Button
                    text={isLoading ? "Sending..." : "Send"}
                    type="submit"
                    className={styles.orderCallForm__button}
                    onClick={submitOrderForCall}
                />
            </form>
        </section>
    )
}

export default OrderCall;