import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Contact() {
  const linkArray = [
    { link: "https://www.linkedin.com/in/lonileere/", label: "LinkedIn" },
    {
      link: "https://drive.google.com/file/d/1-0d1Q0_pp2IH2FTfDfo2ffhcV4RRVLv9/view?usp=share_link",
      label: "Resume",
    },
    { link: "https://github.com/lonileere", label: "GitHub" },
    { link: "mailto:l.onileere@gmail.com", label: "Mail" },
  ];

  return (
    <ul className="text-xl">
      {linkArray.map(({ link, label }) => (
        <li>
          <Link className="hover:text-gray-500" target="_blank" to={link}>
            {label} <BsArrowUpRight className="inline-block ml-1" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
