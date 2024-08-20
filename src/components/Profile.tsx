import Image from "next/image";
import { motion } from "framer-motion";
import ProfileImg from "../../public/profile.png"

function Profile() {
  return (
    <div className="w-full h-full lg:w-80 lg:h-80 mx-auto flex justify-center items-center">
    {/* Rotating Circle */}
    <motion.svg
      className="absolute w-[318px] lg:w-[506px] h-[424px] lg:h-[506px] mt-56 lg:mt-0"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="253"
        cy="253"
        r="194"
        stroke="#FF6F61"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: "24 10 0 0" }}
        animate={{
          strokeDasharray: [
            "15 120 25 25",
            "16 25 92 72",
            "4 250 22 22",
          ],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.svg>

    {/* Image Inside the Circle */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="absolute w-60 h-60 lg:w-96 lg:h-96  mt-56 lg:mt-0"
    >
      <Image
        src={ProfileImg}
        alt="Profile Image"
        priority
        quality={100}
      fill
      
        className="object-contain"
      />
    </motion.div>
  </div>
  )
}

export default Profile