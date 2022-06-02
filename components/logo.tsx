import { useCallback, useEffect, useState } from "react";


const flickerTime = 2000;

const Logo: React.FC = () => {

  let [one, setOne] = useState("1");

  const flicker = useCallback(() => {
    if (Math.random() > 0.5) {
      setOne("");
      setTimeout(() => setOne("1"), 100);
    }
  }, [setOne]);

  useEffect(() => {    
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