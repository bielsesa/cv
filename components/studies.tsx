import { promises as fs } from 'fs';
import StudiesItem from './studies-item';

export default async function Studies() {
    const file = await fs.readFile(process.cwd() + '/public/studies.json', 'utf8');
    const jsonData = JSON.parse(file);
    
    var data: any[] = []; 
    
    jsonData.forEach((elementFromJson: any) => {
        data.push(<StudiesItem
            key={elementFromJson.key}
            title={elementFromJson.title}
            center={elementFromJson.center}
            from={elementFromJson.from}
            to={elementFromJson.to}
            description={elementFromJson.description}
            technologies={elementFromJson.technologies}
            />);
    });
    
    return (
        <div className="flex-1 w-2/3" id="studies">
            <h1 className="text-orange text-xl py-5">Studies</h1>
            <div className='flex flex-col'>
                {data}
            </div>
        </div>
    );
}