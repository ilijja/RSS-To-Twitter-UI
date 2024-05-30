import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  ArrowLeftEndOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import NavigationLink from "./NavLink";
import RightContainer from "./RightContainer";
import { Form } from "react-router-dom";
import UserProgressContext from "@/store/UserProgresContext";
import { FaXTwitter } from "react-icons/fa6";
import { Trash } from "lucide-react";
import RemoveTwitterAccount from "./RemoveTwitterAccount";

const navigation = [
  { name: "Dashboard", to: "/home", icon: HomeIcon, current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/login");
  const { user, setShowModal } = useContext(UserProgressContext);

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  const handleDeleteTwitter = () => {
    setShowModal(<RemoveTwitterAccount/>)
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-zinc-700 hover:text-indigo-600 hover:bg-gray-50",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-indigo-600"
                                        : "text-gray-400 group-hover:text-indigo-600",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Connected account
                          </div>
                          <div className="flex gap-2">
                            <XMarkIcon />
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-56 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-700 bg-zinc-950 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <NavigationLink
                          key={item.name}
                          activeLink={activeLink}
                          to={item.to}
                          onClick={() => handleLinkClick(item.to)}
                        >
                          {item.name}
                        </NavigationLink>
                      </li>
                    ))}
                  </ul>
                </li>
                {user && user.twitterUsername && (
                  <li className="-mx-2">
                    <div className="text-xs font-semibold leading-6 text-gray-400">
                      Connected account
                    </div>
                    <div className="flex justify-between bg-zinc-950 h-10 items-center text-zinc-50 rounded-lg p-2 mt-2 hover:bg-zinc-900 cursor-pointer group">
                      <div className="flex gap-2 items-center justify-center">
                        <FaXTwitter />
                        <p>@{user.twitterUsername}</p>
                      </div>
                      <Trash onClick={handleDeleteTwitter} className="h-4 w-4 mr-2 hidden group-hover:block" />
                    </div>
                  </li>
                )}
                <li className="-mx-6 mt-auto p-3">
                  <Form action="/logout" method="post">
                    <button
                      type="submit"
                      className="rounded-md w-full flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-zinc-50 hover:bg-zinc-900"
                    >
                      <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
                      <span aria-hidden="true">Logout</span>
                    </button>
                  </Form>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-10 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-zinc-800">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main>
          <RightContainer>
            <div className="py-10 lg:pl-56 ">{children}</div>
          </RightContainer>
        </main>
      </div>
    </>
  );
};

export default Sidebar;
