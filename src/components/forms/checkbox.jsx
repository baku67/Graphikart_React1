export function Checkbox({checked, onChange, label, id}) {
    return(
        <div>
            <input 
                id={id}
                type="checkbox" 
                className="form-check-input"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                style={{marginRight:"10px"}}
            />
            <label htmlFor={id} className="form-check-label">{label}</label>
        </div>
    )
}