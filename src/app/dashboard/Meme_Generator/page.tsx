'use client'

import { useEffect, useState } from "react"

const page = () => {

    const [memes, setMemes] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://meme-api.com/gimme/35');
                const data = await response.json();
                setMemes(data.memes);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {memes.map((meme: any) => (
                <div key={meme.id} className="flex flex-col items-center justify-center">
                <div className="w-full flex flex-row">
                    <img src={meme.url} alt="Hello"/>
                </div>
                </div>
            ))}
        </div>
    );
}

export default page;
