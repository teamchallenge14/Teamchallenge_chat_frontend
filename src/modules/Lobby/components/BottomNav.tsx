import { BottomNavItem } from './BottomNavItem';

type BottomNavProps = {
  variant?: 'lobby';
};

export const BottomNav = ({ variant = 'lobby' }: BottomNavProps) => {
  return (
    <nav
      className="fixed bottom-[36px] left-4 right-4 z-50 h-[72px] rounded-[72px] border border-neutral-50 bg-[#FAFAFACC] shadow-[0px_4px_4px_rgba(0,0,0,0.08)]"
      aria-label="Bottom navigation"
      data-variant={variant}
    >
      <ul className="flex h-full items-center justify-around">
        <BottomNavItem to="/home" label="Home" icon="/img/home.svg" />

        <BottomNavItem to="/messages" label="Messages" icon="/img/messages.svg" showBadge />

        <BottomNavItem to="/contacts" label="Contacts" icon="/img/contacts.svg" />

        <BottomNavItem to="/settings" label="Settings" icon="/img/settings.svg" />
      </ul>
    </nav>
  );
};
