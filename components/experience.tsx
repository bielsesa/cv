import { promises as fs } from 'fs';
import ExperienceItem from './experience-item';
import { ExperienceData } from './experience-item';

export default async function Experience() {
    const file = await fs.readFile(process.cwd() + '/public/experience.json', 'utf8');
    const jsonData = JSON.parse(file);
    // console.log(jsonData);
    
    var data: ExperienceData[] = []; 
    
    jsonData.forEach((element: any) => {
        data.push(ExperienceData.mapFromJson(element));
    });
    console.log(data);
    
    return (
        <div id="experience">
            <h1 className="text-orange-dark text-xl">Experience</h1>
            {/* data.forEach((experienceDataItem: ExperienceData) => {
                <ExperienceItem data={experienceDataItem} />
            }) */}
        </div>
    );
} 

function JsonToExperienceData(jsonData: any) {
    return new ExperienceData(
        jsonData.role,
        jsonData.company,
        jsonData.from,
        jsonData.to,
        jsonData.description,
        jsonData.highlights,
        jsonData.technologies);
}