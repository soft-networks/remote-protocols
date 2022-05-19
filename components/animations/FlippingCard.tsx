import { motion, useMotionValue } from "framer-motion";


const FlippingCard: React.FC<{ hiddenSide?: boolean; flipCard: number }> = ({ children, hiddenSide, flipCard }) => {
  const initAngle = hiddenSide ? 180 : 0;

  let x = useMotionValue(0);
  let y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    let xp = event.clientX - rect.left - rect.width / 2;
    let xpn = xp / (rect.width / 2);

    let yp = event.clientY - rect.top - rect.height / 2;
    let ypn = yp / (rect.height / 2);

    x.set(xpn * 5);
    y.set(ypn * 5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="contentContainer"
      initial={{ rotateY: initAngle }}
      animate={{ rotateY: initAngle + 180 * flipCard }}
      transition={{ duration: 1}}
      whileHover={{scale: 1.1}}
    >
      <motion.div className="fullBleed border glow" style={{rotateX: y, rotateY: x}}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;