import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function useAosAnimation() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
}
