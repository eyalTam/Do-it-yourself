
export const InputSelection = props => {
    return (
            <select 
                value={props.value}
                disabled={props.disable}
                dir={props.direction}  
                onChange={(event) => props.changed(event)}
                >
                        {props.selection}
            </select>
        
    )
}
