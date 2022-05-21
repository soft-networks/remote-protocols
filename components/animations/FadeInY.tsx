import { m } from "framer-motion";



const FadeInY : React.FC = ({ children }) => {
  return (
    <m.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%",  opacity: 1 }}
      // transition={{duration: 1}}
      transition={{ opacity: { duration: 1 }, default: { duration: 5 }}}
    >
      {children}
    </m.div>
  );
}

export default FadeInY;