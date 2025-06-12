import background from "@/public/bg.jpg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Features from "@/components/page/features";
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export default function Home() {
  return (
    <div>
      <section
        className="min-h-screen snap-center flex flex-col justify-center items-center px-4 md:px-6 "
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></section>
      <section id="features">
        <Features/>
      </section>
    </div>
  );
}
