import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./logo";

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

export default Header;
