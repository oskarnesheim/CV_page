import { useEffect, useState } from "react";

export default function Go_to_top_button() {
  const [showButton, setShowButton] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      setShowButton(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  });

  return (
    <>
      {showButton && (
        <div className="fixed bottom-4 right-4 w-20 cursor-pointer">
          <img
            // className="fixed bottom-4 right-4 w-12 h-12 cursor-pointer"
            // className="fixed top-4 right-4 w-12 h-12 cursor-pointer"
            onClick={handleScrollToTop}
            src="Scroll_To_Top_Icon.png"
            alt="Scroll to top"
          />
        </div>
      )}
    </>
  );
}
