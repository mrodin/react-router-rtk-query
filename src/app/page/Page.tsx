import React from "react";
import { Link } from "react-router-dom";

export const Page = () => (
  <div className="flex h-full w-full flex-col items-center justify-center">
    <p>Page</p>
    <Link to="/">Link to home</Link>
  </div>
);
