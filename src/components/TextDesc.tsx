import React from 'react';
import { CalendarIcon, DividerVerticalIcon, PersonIcon } from '@radix-ui/react-icons';
import { MapPin } from 'lucide-react';

interface TextDescProps {
    time: string;
    location: string;
    adviser: string;
    title: string;
    desc: string;
}

const TextDesc: React.FC<TextDescProps> = ({ time, location, adviser, title, desc }) => {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <CalendarIcon className="w-5 h-5 mr-2 mb-1" />
                <p className="text-sm font-light">{time}</p>
                {location && (
                    <>
                        <DividerVerticalIcon className="w-5 h-5 mb-1" />
                        <MapPin className="w-5 h-5 mr-2 mb-1" />
                        <p className="text-sm font-light">{location}</p>
                    </>
                )}
                
                {adviser && (
                    <>
                        <DividerVerticalIcon className="w-5 h-5 mb-1" />
                        <PersonIcon className="w-5 h-5 mr-2 mb-1" />
                        <p className="text-sm font-light">{adviser}</p>
                    </>
                )}
            </div>
            <h1 className="text-xl font-bold">
                {title}
            </h1>
            <h1 className="text-base font-medium">
                {desc}
            </h1>
            <hr className="border-t border-black w-full my-6" /> 
        </div>
    );
}

export default TextDesc;