import type { LayoutConfig } from './layoutConfig';

export const STATIC_AUTH_CONFIG = {
  login: {
    title: 'Log In',
    subtitle: 'Welcome back!',
    description: 'Login to continue chatting',
    layout: 'form',
    showProgress: false,
    showBack: false,
    image: 'user.svg',
  },
  guestUsername: {
    title: 'Guest Entry',
    image: 'user.svg',
    subtitle: 'Choose Your Username',
    description: 'Enter a username to continue as guest',
    layout: 'form',
  },
} satisfies Record<'login' | 'guestUsername', LayoutConfig>;
