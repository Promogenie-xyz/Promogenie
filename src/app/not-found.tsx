import Link from "next/link";


export default function NotFound() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-grid bg-black">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
                <h1 className="text-4xl text-white">Sorry, we have not built the page you are requesting. Give us some time to build it "_"</h1>
            <Link href="/" className="text-2xl text-white underline">Click on this to see what we have built</Link>
            </div>
        </div>
    )
}