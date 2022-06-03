import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { LOGO_FLICKER_TIME } from "../data/times";

const Header: React.FC = () => {


  return (
    <div className="fullWidth center padded:s1">
      <div className="center-text">
        <p>
          <Logo />
        </p>
        <p>PROTOCOLS FOR REMOTE CONNECTION</p>
        <div className="horizontal-stack center">
          <ActiveLink href="/" text="oracle"/>
          <ActiveLink href="/all" text="all cards"/>
          <ActiveLink href="/about" text="about"/>
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
