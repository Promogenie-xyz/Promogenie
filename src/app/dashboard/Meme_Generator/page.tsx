'use client'

import { useEffect, useState } from "react"

const Page = () => {

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
    }, [memes]);

    return (
        <div>
      
        </div>
    );
}

export default Page;
