import {
  CalendarIcon,
  MapPinIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/16/solid";
import React from "react";

interface ExperienceProps {
  title: string;
  company: string;
  from: string;
  to: string;
  location: string;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  from,
  to,
  location,
}) => {
  return (
    <div className="flex flex-col gap-2 py-4">
      <span className="text-lg">{title}</span>
      <span className="font-bold flex flex-row gap-x-1">
        <ComputerDesktopIcon className="h-6 w-6 text-gray-500" />
        {company}
      </span>
      <div className="flex flex-row gap-x-20">
        <span className="flex flex-row gap-x-1">
          <CalendarIcon className="h-6 w-6 text-gray-500" /> {from} - {to}
        </span>
        <span className="flex flex-row gap-x-1">
          <MapPinIcon className="h-6 w-6 text-gray-500" />
          {location}
        </span>
      </div>
      <div className="flex flex-col gap-1 text-gray-500">
        <li> key take aways 1</li>
        <li> key take aways 2</li>
      </div>
    </div>
  );
};

export default Experience;
