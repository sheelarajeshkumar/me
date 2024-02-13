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
  keyTakeAways?: string[];
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  from,
  to,
  location,
  keyTakeAways,
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
      <div className="flex flex-col gap-1 text-gray-500 px-8">
        <ul className="list-outside list-disc">
          {keyTakeAways?.map((keyTakeAway, index) => (
            <li className="capitalize" key={index}>
              {keyTakeAway}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
