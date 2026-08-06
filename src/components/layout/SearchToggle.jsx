import { useState, useRef } from "react";
import { Search } from "lucide-react";

const SearchToggle = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    const isExpanded = isHovered || isFocused;

    const handleCircleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div
            className="relative h-11 w-11"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
          absolute top-0 flex h-11 items-center overflow-hidden rounded-full
          border bg-white shadow-sm transition-all duration-300 ease-in-out
          ${isExpanded ? "left-0 w-72 border-pink-500" : "left-0 w-11 border-gray-500"}
        `}
            >
                <button
                    type="button"
                    onClick={handleCircleClick}
                    className="flex h-11 w-11 shrink-0 items-center justify-center text-black"
                >
                    <Search size={20} />
                </button>

                <input
                    ref={inputRef}
                    type="text"
                    dir="rtl"
                    placeholder="دنبال چی هستی؟"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="mx-6 h-full w-full bg-transparent pl-3 pr-1 text-right text-sm text-gray-800 outline-none"
                />
            </div>
        </div>
    );
};

export default SearchToggle;