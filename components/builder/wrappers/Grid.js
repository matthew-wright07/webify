export default function Grid({children}){
    return (
        <div className="min-h-0 flex-1 grid grid-cols-12">
            {children}
        </div>
    )
}