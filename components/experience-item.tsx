import React from 'react';

export default function ExperienceItem(data: ExperienceData) {
    const highlightsListElements: any[] = data.highlights.map((item, index) => {
        return <li key={index}>{item}</li>;
    });

    return (
        <div className='text-normal text-lg p-5'>
            <p className='text-skyblue'>{data.role}<span className='font-light'> @ {data.company} <span className='italic'>({data.from} - {data.to})</span></span></p>
            <div className="text-base">
                <p>{data.description}</p>
                <ul className='list-disc list-inside ml-5'>
                    { highlightsListElements }
                    <li className='italic'><span className='font-bold'>Technologies:</span> <span className='text-mint'>{data.technologies.join(", ")}</span></li>
                </ul>
            </div>
        </div>
    )
}

export type ExperienceData = {
    key: number,
    role: string;
    company: string;
    from: string;
    to: string;
    description: string;
    highlights: string[];
    technologies: string[];
}
