import { NavLink } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  

const NavigationLink = (props) => {
    return <NavLink to={props.to} onClick={props.onClick} className={classNames(
        props.to === props.activeLink
          ? "bg-zinc-900 text-zinc-50"
          : "text-zinc-400 hover:bg-gray-700 hover:text-zinc-50",
        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
      )} >{props.children}</NavLink>
}

export default NavigationLink;