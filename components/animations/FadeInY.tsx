import { motion } from "framer-motion";



const FadeInY : React.FC = ({ children }) => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%",  opacity: 1 }}
      // transition={{duration: 1}}
      transition={{ opacity: { duration: 1 }, default: { duration: 5 }}}
    >
      {children}
    </motion.div>
  );
}

export default FadeInY;