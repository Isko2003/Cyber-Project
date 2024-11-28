"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./breadcrumb.css";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((path) => path);

  const breadCrumbLabels = {
    catalog: "Catalog",
    smartphones: "Smartphones",
  };

  return (
    <nav aria-label="breadcrumb" className="w-[90%] mx-auto py-4">
      <ul className="breadcrumb">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"#"}>Catalog</Link>
        </li>
        {pathArray.map((path, index) => {
          const href = `/${pathArray.slice(0, index + 1).join("/")}`;
          const label = breadCrumbLabels[path] || decodeURIComponent(path);

          return (
            <li key={`${path}-${index}`}>
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
