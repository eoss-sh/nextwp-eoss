const Columns = ({ layout, children }) => {
    return (
        <div
            className={`max-w-5xl mx-auto my-auto grid ${
                layout === '1/2' ? 'grid-cols-2-2' : 'grid-cols-4'
            }`}
        >
            {children}
        </div>
    )
}

export default Columns
