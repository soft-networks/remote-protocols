import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="center">
      <div className="halfWidth padded horizontal-stack">
        <div>
          <Link href="/">intimate protocols</Link>
        </div>
        <div className="horizontal-stack stackSpacing:s-1 align-end">
          <Link href="/all">all cards</Link>
          <Link href="/about">about</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
