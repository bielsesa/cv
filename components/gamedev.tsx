import { promises as fs } from 'fs';
import GamedevItem from './gamedev-item';

export default async function Gamedev() {
    const file = await fs.readFile(process.cwd() + '/public/gamedev.json', 'utf8');
    const jsonData = JSON.parse(file);

    var data: any[] = []; 
    
    jsonData.forEach((elementFromJson: any) => {
        data.push(<GamedevItem
            key={elementFromJson.key}
            title={elementFromJson.title}
            genre={elementFromJson.genre}
            description={elementFromJson.description}
            highlights={elementFromJson.highlights}
            technologies={elementFromJson.technologies}
            thumbnail={elementFromJson.thumbnail}
            url={elementFromJson.url}
            />);
    });

    return (
        <div className="flex-1 w-2/3" id="gamedev">
            <h1 className="text-orange text-xl py-5">Game development projects</h1>
            <div className='flex flex-col'>
                {data}
            </div>
        </div>
    );
}