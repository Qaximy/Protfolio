import React from "react";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 3, title: "About", link: "/about" },
  { id: 4, title: "Work", link: "/work" },
  { id: 5, title: "Skill", link: "/Skill" },
  { id: 6, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container mx-auto flex justify-between items-center py-4 px-6"
        >
          <div className="text-2xl flex items-center gap-2 font-bold uppercase text-secondary">
            <p>Portfolio</p>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-800">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="text-xl">
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-secondary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl text-gray-800" />
          </div>
        </motion.div>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 md:hidden"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="text-xl">
                <a
                  href={menu.link}
                  className="inline-block py-1 px-3 hover:text-secondary font-semibold"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
