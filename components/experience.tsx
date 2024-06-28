import { promises as fs } from 'fs';
import ExperienceItem from './experience-item';
import { ExperienceData } from './experience-item';

export default async function Experience() {
    const file = await fs.readFile(process.cwd() + '/public/experience.json', 'utf8');
    const jsonData = JSON.parse(file);
    
    var data: any[] = []; 
    
    jsonData.forEach((elementFromJson: any) => {
        data.push(<ExperienceItem
            key={elementFromJson.key}
            role={elementFromJson.role}
            company={elementFromJson.company}
            from={elementFromJson.from}
            to={elementFromJson.to}
            description={elementFromJson.description}
            highlights={elementFromJson.highlights}
            technologies={elementFromJson.technologies}
            />);
    });
    
    return (
        <div id="experience">
            <h1 className="text-orange text-xl">Experience</h1>
            <div>
                {data}
            </div>
        </div>
    );
}