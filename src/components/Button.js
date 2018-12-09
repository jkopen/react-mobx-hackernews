import React from 'react';

const ButtonInline = ({
    onClick,
    type = 'button',
    children
}) =>
    <Button className="button-inline" type={type} onClick={onClick}>{children}</Button>;

const Button = ({
    onClick,
    type = 'button',
    className,
    children
}) => <button type={type} className={className} onClick={onClick}>{children}</button>;

export default Button;

export { ButtonInline }