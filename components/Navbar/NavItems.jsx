import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link 
    className={`nav__item ${
      active ? "active" : ""
    }`} href={href}>
      
   
        {text}
      
    </Link>
  );
};

export default NavItem;