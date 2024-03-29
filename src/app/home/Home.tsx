import React from "react";

import { Dashboard } from "./Dashboard";
import { Projects } from "./Projects";

export const Home = () => (
  <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
    <aside className="sidebar w-64 -translate-x-full transform bg-indigo-500 transition-transform duration-150 ease-in md:translate-x-0 md:shadow">
      <div className="sidebar-header flex items-center justify-center py-4">
        <div className="inline-flex">
          <a href="#" className="inline-flex flex-row items-center">
            <span className="ml-1 text-2xl font-bold uppercase leading-10 text-gray-100">Acme Corp.</span>
          </a>
        </div>
      </div>
      <div className="sidebar-content px-4 py-6">
        <ul className="flex w-full flex-col">
          <li className="my-px">
            <span className="my-4 flex px-4 text-sm font-medium uppercase text-gray-300">Account</span>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span className="ml-3">Profile</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </span>
              <span className="ml-3">Notifications</span>
              <span className="ml-auto flex h-6 items-center justify-center rounded-full bg-red-100 px-2 text-xs font-semibold text-red-500">
                10
              </span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="ml-3">Settings</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-red-400">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="ml-3">Logout</span>
            </a>
          </li>
          <li className="my-px">
            <span className="my-4 flex px-4 text-sm font-medium uppercase text-gray-300">Projects</span>
          </li>
          <Projects />
        </ul>
      </div>
    </aside>
    <main className="main -ml-64 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
      <div className="main-content flex flex-grow flex-col p-4">
        <div className="mt-4 flex flex-grow flex-col bg-white p-4">
          <Dashboard />
        </div>
      </div>
      <footer className="footer px-4 py-6">
        <div className="footer-content">
          <p className="text-center text-sm text-gray-600">
            © Acme Corp. All rights reserved. <a href="https://twitter.com/iaminos">by iAmine</a>
          </p>
        </div>
      </footer>
    </main>
  </div>
);
