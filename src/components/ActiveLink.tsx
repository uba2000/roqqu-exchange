import { Link } from "react-router-dom";

import useRouter from "../hooks/useRouter";

type ActiveLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const ActiveLink = ({ href, children, className = "" }: ActiveLinkProps) => {
  const router = useRouter();
  // const [path] = useState<string>(window.location.pathname);
  return (
    <Link
      to={href}
      className={`${
        router.pathname === href
          ? "bg-hover-background text-[#FFFFFFD8]"
          : "text-primary-1300"
      } hover:bg-hover-background hover:text-[#FFFFFFD8] ${className}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
