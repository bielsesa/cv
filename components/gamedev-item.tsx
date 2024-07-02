import Image from "next/image";

export default function GamedevItem(data: GamedevData) { 
    const highlightsListElements: any[] = data.highlights.map((item, index) => {
        return <li key={`gamedev-${data.key}-${index}`}>{item}</li>;
    });

    return (
        <div className='text-normal text-lg p-5'>
            <p className='text-skyblue font-semibold'>{data.title}<span className='font-light'></span></p>
            <div className="flex flex-row">
                <div className="text-base w-300 flex-initial">
                    <p>{data.description}</p>
                    <ul className='list-disc list-inside ml-5'>
                        { highlightsListElements }
                        <li className='italic' key={`gamedev-${data.key}-techs`}>
                            <span className='font-bold'>Technologies:</span> <span className='text-mint'>{data.technologies.join(", ")}</span>
                        </li>
                    </ul>
                    <a href={data.url}><button className="button">Play it here!</button></a>                
                </div>
                <Image
                src={`/images/${data.thumbnail}`}
                width={315}
                height={250}
                alt={`The thumbnail for ${data.title}`}
                className="flex-none"/>
            </div>
        </div>
    );
}

export type GamedevData = {
    key: number;
    title: string;
    genre: string;
    description: string;
    highlights: string[];
    technologies: string[];
    thumbnail: string;
    url: string;
}