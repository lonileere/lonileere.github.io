import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <ul className="text-xl">
      <li className="flex flex-col">
        <Link target="_blank" to="https://lonileere.com/weatherapp">
          <span>
            Weather App <BsArrowUpRight className="inline-block ml-1" />{" "}
          </span>
        </Link>
        <Link target="_blank" to="https://github.com/lonileere/weatherapp">
          <span className="text-gray-400 font-light">
            Show Repo <BsArrowUpRight className="inline-block ml-1" />
          </span>
        </Link>
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
