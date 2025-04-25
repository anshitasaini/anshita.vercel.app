import React from "react";
import {
  CalendarIcon,
  DividerVerticalIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";

interface ProgramDescriptionProps {
  logo_src: string;
  title: React.ReactNode;
  time?: string;
}

const ProgramDescription: React.FC<ProgramDescriptionProps> = ({
  logo_src,
  title,
  time,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            src={logo_src}
            alt="company logo"
            className="self-start mt-1"
            style={{ maxWidth: "20px", maxHeight: "20px" }}
          />
          <h1 className="text-base sm:text-lg md:text-xl font-semibold ml-3 mr-1">
            {title}
          </h1>
        </div>
        {time && (
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 mb-1 mt-1" />
            <p className="text-xs sm:text-sm font-light">{time}</p>
          </div>
        )}
      </div>
      <hr className="border-t border-black w-full my-2" />
    </div>
  );
};

export default ProgramDescription;
