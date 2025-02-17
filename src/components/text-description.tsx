import React from "react";
import {
  CalendarIcon,
  DividerVerticalIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";

interface TextDescriptionProps {
  time: string;
  location: string;
  adviser: string;
  title: string;
  desc: string;
}

const TextDescription: React.FC<TextDescriptionProps> = ({
  time,
  location,
  adviser,
  title,
  desc,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center text-xs sm:text-sm">
        <div className="flex items-center mr-2 mb-1 md:mb-0">
          <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
          <p className="font-light">{time}</p>
        </div>
        {location && (
          <div className="flex items-center mr-2 mb-1 md:mb-0">
            <DividerVerticalIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 hidden md:block" />
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <p className="font-light">{location}</p>
          </div>
        )}
        {adviser && (
          <div className="flex items-center w-full sm:w-auto mt-1 sm:mt-0">
            <DividerVerticalIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 hidden md:block" />
            <PersonIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <p className="font-light">{adviser}</p>
          </div>
        )}
      </div>
      <h1 className="text-lg sm:text-xl font-bold mt-2">{title}</h1>
      <h1 className="text-sm sm:text-base font-medium mt-1">{desc}</h1>
      <hr className="border-t border-black w-full my-4 sm:my-6" />
    </div>
  );
};

export default TextDescription;
