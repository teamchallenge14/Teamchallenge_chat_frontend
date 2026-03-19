import { NavLink } from 'react-router-dom';

type BottomNavItemProps = {
  to: string;
  label: string;
  icon: string;
  showBadge?: boolean;
};

export const BottomNavItem = ({ to, label, icon, showBadge = false }: BottomNavItemProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex flex-col items-center justify-center gap-1 text-xs font-medium ${
            isActive ? 'text-black' : 'text-neutral-500'
          }`
        }
      >
        <div className="relative">
          <img src={icon} alt="" aria-hidden="true" className="h-6 w-6" />

          {showBadge && (
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-600" />
          )}
        </div>

        <span>{label}</span>
      </NavLink>
    </li>
  );
};
