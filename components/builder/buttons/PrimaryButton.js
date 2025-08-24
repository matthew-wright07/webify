export default function PrimaryButton({text}){
    return (
        <button className="bg-primary text-white rounded-lg py-1 px-2 border-2 border-primary hover:border-foreground transition duration-500 hover:cursor-pointer">{text}</button>
    )
}