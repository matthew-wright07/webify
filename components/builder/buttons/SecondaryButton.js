export default function SecondaryButton({text}){
    return (
        <button className="border-2 border-foreground text-foreground rounded-lg py-1 px-2 hover:text-primary hover:border-primary transition duration-500 hover:cursor-pointer">{text}</button>
    )
}