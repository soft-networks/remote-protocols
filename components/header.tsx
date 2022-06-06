import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { LOGO_FLICKER_TIME } from "../data/times";

const Header: React.FC = () => {


  return (
    <div className="fullWidth center padded:s1">
      <div className="center-text">
        <div>
          <Logo />
        </div>
        <div>PROTOCOLS FOR REMOTE CONNECTION</div>
        <div className="horizontal-stack center">
          <ActiveLink href="/" text="ask the wizard"/>
          <ActiveLink href="/all" text="browse cards"/>
          <ActiveLink href="/about" text="about the project"/>
        </div>
      </div>
    </div>
  );
};

const ActiveLink : React.FC<{href: string, text: string}> = ({href, text}) => {
  const { asPath } = useRouter()

  return (
    <span className={classNames({ active: asPath == href })}>
      <Link href={href}>{text}</Link>
    </span>
  )
}

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
    let interval = setInterval(flicker, LOGO_FLICKER_TIME);
    return () => clearInterval(interval);
  }, [flicker])

  return (
    <span>
      1:{one}
    </span>
  )
}

export default Header;
