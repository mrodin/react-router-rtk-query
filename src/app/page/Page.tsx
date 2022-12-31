import React from "react";
import { Link } from "react-router-dom";

export const Page = () => (
  <div className="flex h-full w-full items-center justify-center">
    Page
    <Link to="/">Link to home</Link>
  </div>
);
