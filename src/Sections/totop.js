import ScrollToTop from "react-scroll-to-top";
import { FaChevronUp } from "react-icons/fa";

function ToTop() {
  return (
    <div>
      <ScrollToTop smooth component={<FaChevronUp />}></ScrollToTop>
    </div>
  );
}

export default ToTop;
