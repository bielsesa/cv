import React from 'react';

export default function StudiesItem(data: StudiesData) {
    const technologies: any[] = data.technologies.map((item, index) => {
        return <li key={`exp-${data.key}-${index}`}>{item}</li>;
    });

    return (
        <div className='text-normal text-lg p-5 w-200'>
            <p className='text-skyblue font-semibold'>{data.title}<span className='font-light'> <span className='text-pink'>@</span> <span className='text-lavender'>{data.center} <span className='italic'>({data.from} - {data.to})</span></span></span></p>
            <div className="text-base">
                <p>{data.description}</p>
                <ul className='list-disc list-inside ml-5'>
                    { technologies }
                </ul>
            </div>
        </div>
    )
}

export type StudiesData = {
    key: number;
    title: string;
    center: string;
    from: string;
    to: string;
    description: string;
    technologies: string[];
}
