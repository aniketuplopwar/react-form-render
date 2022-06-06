export const TextField = ({
    name,
    label, 
    value,
    onChange,
    ref,
    ...restProps
}) => {
    return <p>
            <label>{label}</label>
            <input type="text" name={name} value={value || ''} onChange={onChange} ref={ref} {...restProps}/>
            </p>

}