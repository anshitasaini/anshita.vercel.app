import React from "react";
import {
  CalendarIcon,
  DividerVerticalIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { MapPin } from "lucide-react";

interface ProgramDescProps {
  logo_src: string;
  title: string;
  time: string;
}

const ProgramDesc: React.FC<ProgramDescProps> = ({ logo_src, title, time }) => {
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
          <h1 className="text-base sm:text-lg md:text-xl font-bold ml-3 mr-3">
            {title}
          </h1>
        </div>
        {time && (
          <>
            <div className="flex items-center">
              <CalendarIcon className="w-6 h-6 sm:w-5 sm:h-5 xs:w-4 xs:h-4 mr-2 mb-1 mt-1" />
              <p className="text-xs sm:text-sm font-light">{time}</p>
            </div>
          </>
        )}
      </div>
      <hr className="border-t border-black w-full my-2" />
    </div>
  );
};

export default ProgramDesc;
