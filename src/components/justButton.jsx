export default function JustButton({ children, onClick, className, ...props }) {
    return (

        <button
            onClick={onClick}
            className={ `cursor-pointer rounded-lg px-4 py-1.5 bg-blue-500 font-semibold text-white hover:bg-blue-400 active:bg-blue-600 ${className}`}
            {...props}
            >
            { children }
        </button>

    )
}