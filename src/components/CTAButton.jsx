
export const CTAButton = ({text}) => {
    return (
        <button className="button relative rounded-lg h-[3.5rem] w-40 inline-flex 
            items-center justify-center overflow-hidden bg-gray-800 
            text-white shadow-2xl transition-all before:absolute 
            before:h-0 before:w-0 before:rounded-full before:bg-orange-600 
            before:duration-500 before:ease-out hover:shadow-orange-600 
            hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">
                {text}
            </span>
        </button>
    )
}
