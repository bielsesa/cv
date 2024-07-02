import React from 'react';

export default function ExperienceItem(data: ExperienceData) {
    const highlightsListElements: any[] = data.highlights.map((item, index) => {
        return <li key={`exp-${data.key}-${index}`}>{item}</li>;
    });

    return (
        <div className='text-normal text-lg p-5 w-200'>
            <p className='text-skyblue font-semibold'>{data.role}<span className='font-light'> <span className='text-pink'>@</span> <span className='text-lavender'>{data.company} <span className='italic'>({data.from} - {data.to})</span></span></span></p>
            <div className="text-base">
                <p>{data.description}</p>
                <ul className='list-disc list-inside ml-5'>
                    { highlightsListElements }
                    <li className='italic' key={`exp-${data.key}-techs`}>
                        <span className='font-bold'>Technologies:</span> <span className='text-mint'>{data.technologies.join(", ")}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export type ExperienceData = {
    key: number;
    role: string;
    company: string;
    from: string;
    to: string;
    description: string;
    highlights: string[];
    technologies: string[];
}
