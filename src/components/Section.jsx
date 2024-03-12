

export const Section = ({id, customPaddings, className}) => {
    return (
        <div id={id} 
            className={`relative ${customPaddings || `py-10 lg:py-16
                xl:py-20`} ${className || ''}`}>
        </div>
    )
}
