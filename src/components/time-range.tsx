import React from 'react';
import { CalendarIcon, DividerVerticalIcon, PersonIcon } from '@radix-ui/react-icons';

interface TimeRangeProps {
    time: string;
}

const TimeRange: React.FC<TimeRangeProps> = ({ time }) => {
    return (
        <div className="flex">
            <CalendarIcon className="w-5 h-5 mr-2" />
            <p className="text-sm font-light">{time}</p>
        </div> 
    );
}

export default TimeRange;