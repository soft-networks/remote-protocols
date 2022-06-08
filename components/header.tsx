import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { LOGO_FLICKER_TIME } from "../data/times";

const Header: React.FC = () => {


  return (
    <div className="fullWidth padded">
      <div className="stack" >
        <div className="center-text" style={{marginBlockStart: "var(--s1)"}}>
          <Logo />
        </div>
        <div className="center-text"  style={{marginBlockStart: "0"}}>
          protocols for remote connection
        </div>
        <nav className="horizontal-stack halfWidth centerh center-text" >
          <ActiveLink href="/" text="ask the wizard" />
          <span> ⟡ </span>
          <ActiveLink href="/all" text="browse cards" />
          <span> ⟡ </span>
          <ActiveLink href="/about" text="about this project" />
        </nav>
      </div>
    </div>
  );
};

const ActiveLink : React.FC<{href: string, text: string}> = ({href, text}) => {
  const { asPath } = useRouter()

  return (
    <span className={classNames({ active: asPath == href }, 'center-text')}>
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
