import React from 'react';

export default function ExperienceItem(data: ExperienceData) {
    return (
        <div className='text-normal text-lg'>
            <p>{data.role}<span className='font-light'> @ {data.company} <span className='italic'>({data.from} - {data.to})</span></span></p>
            <p>{data.description}</p>
            <ul className='list-disc'>
                <li>Highlights (this list element should loop with highlights array)</li>
                <li className='italic'><span className='font-bold'>Technologies:</span> {data.technologies.join(", ")}</li>
            </ul>
        </div>
    )
}

export class ExperienceData {
    role: string;
    company: string;
    from: string;
    to: string;
    description: string;
    highlights: string[];
    technologies: string[];

    constructor(role: string,
                company: string,
                from: string,
                to: string,
                description: string,
                highlights: string[],
                technologies: string[])
    {
        this.role = role;
        this.company = company;
        this.from = from;
        this.to = to;
        this.description = description;
        this.highlights = highlights;
        this.technologies = technologies;
    }

    static mapFromJson(jsonData: any) {
        return new ExperienceData(
            jsonData.role,
            jsonData.company,
            jsonData.from,
            jsonData.to,
            jsonData.description,
            jsonData.highlights,
            jsonData.technologies);
    }
}
