'use client'

interface HeadingProps{
    title:string,
    description:string,
    color:string
}
const Heading = ({title,description,color}:HeadingProps) => {
    return (
    <div className="px-4 lg:px-8 flex gap-x-3 mb-8">
        <div>
        <h2 className={`text-3xl font-bold ${color}`}>{title}</h2>
        <p className="text-sm text-muted-foreground text-gray-400">{description}</p>
        </div>
    </div>
  )
}

export default Heading