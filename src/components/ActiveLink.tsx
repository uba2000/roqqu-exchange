import { useState } from "react";
import { Link } from "react-router-dom";

type ActiveLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const ActiveLink = ({ href, children, className = "" }: ActiveLinkProps) => {
  const [path] = useState<string>(window.location.pathname);
  return (
    <Link
      to={href}
      className={`${path === href ? "bg-hover-background" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
