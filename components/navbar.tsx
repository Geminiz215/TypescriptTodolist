import Link from "next/link";
import { Fragment, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Fragment>
      <nav className="fixed w-full h-24 shadow-xl">
        <div className="flex justify-between items-center h-full px-4 2xl:px16">
          <Link href="" className="w-[-205px] h-[-75px]">
            <img
              src="https://source.unsplash.com/collection/928423/205x75"
              className="cursor-pointer"
              alt=""
            />
          </Link>
          <div className="hidden sm:flex">
            <ul className="hidden sm:flex">
              <Link href="">
                <li className="ml-10 uppercase hover:border-b text-xl">
                  Todo list
                </li>
              </Link>
            </ul>
          </div>
          <div onClick={handler} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? " w-[65%] sm:hidden h-screen bg-slate-300 p-5 ease-in duration-500"
              : "-translate-x-full top-10 w-[65%] ease-out duration-500 pointer-events-none"
          }
        >
          <div className="w-full flex flex-row-reverse h-screen justify-between ">
            <div onClick={handler} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
            <div className="pt-6">
              <ul className="">
                <Link href="" className="my-10">
                  <li className="ml-10 uppercase hover:border-b text-xl">
                    Todo list
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
