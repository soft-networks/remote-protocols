import { useCallback, useEffect, useState } from "react";


const flickerTime = 2000;

const Logo: React.FC = () => {

  let [one, setOne] = useState("1");

  const flicker = useCallback(() => {
    if (Math.random() > 0.5) {
      setOne("_");
      setTimeout(() => setOne("1"), 300);
    }
  }, [setOne]);

  useEffect(() => {    
    flicker();
    let interval = setInterval(flicker, flickerTime);
    return () => clearInterval(interval);
  }, [flicker])

  return (
    <span>
      1:{one}
    </span>
  )
}

export default Logo;