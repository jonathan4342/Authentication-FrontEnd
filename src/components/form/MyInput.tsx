import { ErrorMessage } from '@hookform/error-message';
import React from 'react'
import { useFormContext } from 'react-hook-form'

interface CompProps {
    name: string;
    setValueAs?: (value: any) => any;
    label?: string
    [x: string]: any
}

export const MyInput = ({

    name,
    setValueAs = (value: any) => typeof value === 'string' ? value.trim() : value,
    label,
    ...props

}: CompProps) => {

    const { register } = useFormContext()

    return (
        <label>
            {label && <h4>{label}</h4>}
            <input
                type="text"
                autoComplete='off'
                {...register(name, {
                    required: true,
                    setValueAs,
                })}
                {...props}
            />
            <ErrorMessage
                name={name}
                render={({ message }) => <span>{message}</span>}
            />
        </label>
    )
}
