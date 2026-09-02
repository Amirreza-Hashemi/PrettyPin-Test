import { useState, useRef } from "react";
import { User, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside.js";
import { useAuth } from "../../context/AuthContext";
import accountLinks from "../../data/accountLinks.js";
import ConfirmDialog from "../common/ConfirmDialog.jsx";

const AccountMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const menuRef = useRef(null);
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const handleLinkClick = (e, id) => {
        setIsOpen(false);

        if (id === "logout") {
            e.preventDefault(); // جلوگیری از رفتار پیش‌فرض <a href="#">
            setShowLogoutConfirm(true); // به‌جای خروج فوری، اول مودال تایید باز می‌شود
        }
    };

    const confirmLogout = () => {
        logout();
        setShowLogoutConfirm(false);
        navigate("/");
    };

    const cancelLogout = () => {
        setShowLogoutConfirm(false);
    };

    useClickOutside(menuRef, () => setIsOpen(false));

    return (
        <div className="relative" ref={menuRef}>
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 sm:h-11 sm:w-11 ${
                    isOpen
                        ? "border-pink-500 text-pink-500 shadow-md"
                        : "border-gray-500 hover:border-pink-500 hover:text-pink-500 hover:shadow-md"
                }`}
            >
                <User size={20} />
            </button>

            <div
                className={`
          absolute left-0 top-full z-30 mt-3 w-64 rounded-2xl border border-gray-200
          bg-white p-2 shadow-xl transition-all duration-200
          ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}
        `}
            >
                {isLoggedIn ? (
                    accountLinks.map(({ id, label, icon: Icon, href }) => (
                        <a
                            key={id}
                            href={href}
                            onClick={(e) => handleLinkClick(e, id)}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-pink-500"
                        >
                            <Icon size={18} />
                            {label}
                        </a>
                    ))
                ) : (
                    <Link
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-pink-500"
                    >
                        <LogIn size={18} />
                        ورود / ثبت‌نام
                    </Link>
                )}
            </div>

            <ConfirmDialog
                isOpen={showLogoutConfirm}
                title="خروج از حساب کاربری"
                message="آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟"
                confirmLabel="خروج"
                cancelLabel="انصراف"
                onConfirm={confirmLogout}
                onCancel={cancelLogout}
            />
        </div>
    );
};

export default AccountMenu;