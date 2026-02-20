import { NavLink } from 'react-router-dom';

type BottomNavProps = {
  // Keep variant for future styling differences, even if we use only "lobby" now.
  variant?: 'lobby';
};

export const BottomNav = ({ variant = 'lobby' }: BottomNavProps) => {
  return (
    // Fixed overlay nav like in Figma.
    <nav
      className="fixed bottom-4 left-4 right-4 z-50 h-[72px] rounded-[72px] border border-[#FAFAFA] bg-[#FAFAFAE5] shadow-lg backdrop-blur"
      aria-label="Bottom navigation"
      data-variant={variant}
    >
      <ul className="flex h-full items-center justify-around">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? 'text-black' : 'text-neutral-500'}`
            }
          >
            Home
          </NavLink>
        </li>

        <li className="relative">
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? 'text-black' : 'text-neutral-500'}`
            }
          >
            Messages
          </NavLink>

          {/* Small badge dot */}
          <span className="absolute -right-3 top-0 h-2 w-2 rounded-full bg-red-600" />
        </li>

        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? 'text-black' : 'text-neutral-500'}`
            }
          >
            Contacts
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? 'text-black' : 'text-neutral-500'}`
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
