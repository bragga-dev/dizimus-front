import { createPortal } from "react-dom";
import {
  Search,
  UserCircle2,
  Bell,
  X,
  ChevronRight,
} from "lucide-react";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "./constants";

import MobileUserDropdown from "./dropdowns/user/MobileUserDropdown";
import MobileNotificationDropdown from "./dropdowns/notification/MobileNotificationDropdown";

export default function MobileMenu({
  isOpen,
  onClose,
  isAuthenticated,
}) {
  const [userOpen, setUserOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setUserOpen(false);
      setNotifOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      {createPortal(
        <AnimatePresence>

          {isOpen && (
            <>

              {/* BACKDROP */}
              <motion.div
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="
                  fixed inset-0 z-40
                  bg-black/60
                  backdrop-blur-md
                  lg:hidden
                "
              />

              {/* DRAWER */}
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  damping: 32,
                  stiffness: 280,
                }}
                className="
                  fixed
                  right-0
                  top-0
                  z-50

                  h-screen
                  w-full

                  bg-white

                  flex
                  flex-col

                  lg:hidden
                "
              >

                {/* HEADER */}
                <div
                  className="
                    bg-gradient-to-br
                    from-ecclesia-800
                    to-ecclesia-900

                    px-6
                    pt-6
                    pb-5

                    flex
                    items-center
                    justify-between
                  "
                >

                  <div className="flex items-center gap-5">

                    {isAuthenticated ? (
                      <button
                        onClick={() => {
                          setUserOpen(true);
                          setNotifOpen(false);
                        }}
                        className="
                          flex
                          h-16
                          w-16

                          items-center
                          justify-center

                          rounded-[22px]

                          bg-white/6

                          transition-all

                          hover:bg-white/10
                        "
                      >
                        <UserCircle2
                          size={32}
                          className="text-white"
                        />
                      </button>
                    ) : (
                      <a
                        href="/login"
                        className="
                          flex
                          h-16
                          w-16

                          items-center
                          justify-center

                          rounded-[22px]

                          bg-white/6
                        "
                      >
                        <UserCircle2
                          size={32}
                          className="text-white"
                        />
                      </a>
                    )}

                    {isAuthenticated ? (
                      <button
                        onClick={() => {
                          setNotifOpen(true);
                          setUserOpen(false);
                        }}
                        className="
                          flex
                          h-16
                          w-16

                          items-center
                          justify-center

                          rounded-[22px]

                          bg-white/6

                          transition-all

                          hover:bg-white/10
                        "
                      >
                        <Bell
                          size={30}
                          className="text-white"
                        />
                      </button>
                    ) : (
                      <a
                        href="/login"
                        className="
                          flex
                          h-16
                          w-16

                          items-center
                          justify-center

                          rounded-[22px]

                          bg-white/6
                        "
                      >
                        <Bell
                          size={30}
                          className="text-white"
                        />
                      </a>
                    )}

                  </div>

                  {/* FECHAR */}
                  <button
                    onClick={onClose}
                    className="
                      flex
                      h-12
                      w-[99px]

                      items-center
                      justify-center

                      text-white

                      transition-all

                      hover:bg-white/8  
                                      "
                  >
                    <X
                      size={28}
                      strokeWidth={2}
                    />
                  </button>

                </div>

                {/* SEARCH */}
                <div
                  className="
                    px-5
                    pt-3
                    pb-6
                  "
                >

                  <div
                    className="
                      flex
                      items-center

                      h-[86px]

                      overflow-hidden

                      rounded-[36px]

                      border
                      border-ecclesia-300

                      bg-white
                    "
                  >

                    <input
                      type="text"
                      placeholder="Buscar..."

                      className="
                        flex-1

                        px-8

                        font-navbar
                        font-semibold

                        text-lg

                        text-[#23073A]

                        outline-none
                      "
                    />

                    <button
                      className="
                        flex

                        w-[92px]

                        self-stretch

                        items-center
                        justify-center

                        text-ecclesia-500

                        hover:bg-ecclesia-50
                      "
                    >
                      <Search
                        size={30}
                        strokeWidth={2.1}
                      />
                    </button>

                  </div>

                </div>

                {/* NAV */}
                <div
                  className="
                    flex-1
                    overflow-y-auto

                    px-5
                    pb-10
                  "
                >

                  <div className="space-y-2">

                    {navLinks.map((item, i) => {
                      const Icon = item.icon;

                      return (
                        <motion.a
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          initial={{
                            opacity: 0,
                            x: 25,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: i * 0.05,
                          }}
                          className="
                            group

                            flex
                            items-center

                            gap-6

                            rounded-[30px]

                            px-4
                            py-4

                            transition-all

                            hover:bg-ecclesia-600
                          "
                        >

                          <div
                            className="
                              flex

                              h-16
                              w-16

                              shrink-0

                              items-center
                              justify-center

                              rounded-[22px]

                              bg-ecclesia-50/55

                              text-ecclesia-600

                              transition-all

                              group-hover:bg-white/10
                              group-hover:text-white
                            "
                          >
                            <Icon size={30} />
                          </div>

                          <div className="flex-1">

                            <p
                              className="
                                font-navbar

                                text-xl
                                font-bold

                                text-black

                                group-hover:text-white
                              "
                            >
                              {item.label}
                            </p>

                            {item.description && (
                              <p
                                className="
                                  mt-1

                                  text-base

                                  text-gray-500

                                  group-hover:text-white/80
                                "
                              >
                                {item.description}
                              </p>
                            )}

                          </div>

                          <ChevronRight
                            size={22}
                            className="
                              text-gray-300

                              group-hover:text-white
                            "
                          />

                        </motion.a>
                      );
                    })}

                  </div>

                </div>

              </motion.aside>

            </>
          )}

        </AnimatePresence>,
        document.body
      )}

      {userOpen &&
        createPortal(
          <MobileUserDropdown
            isAuthenticated={isAuthenticated}
            onClose={() => setUserOpen(false)}
          />,
          document.body
        )}

      {notifOpen &&
        createPortal(
          <MobileNotificationDropdown
            onClose={() => setNotifOpen(false)}
          />,
          document.body
        )}
    </>
  );
}