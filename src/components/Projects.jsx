import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Projects() {
  return (
    <ul className="text-xl">
      <li className="flex flex-col">
        <span>
          Example Project <BsArrowUpRight className="inline-block ml-1" />{" "}
        </span>
        <span className="text-gray-400 font-light">
          Show Repo <BsArrowUpRight className="inline-block ml-1" />
        </span>
      </li>
      <li className="flex flex-col">
        <span>
          Example Project <BsArrowUpRight className="inline-block ml-1" />{" "}
        </span>
        <span className="text-gray-400 font-light">
          Show Repo <BsArrowUpRight className="inline-block ml-1" />
        </span>
      </li>
    </ul>
  );
}