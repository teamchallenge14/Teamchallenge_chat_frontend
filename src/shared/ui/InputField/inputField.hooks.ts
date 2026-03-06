import React from 'react';

// debounce hook
export const useDebouncedValue = <T>(value: T, delay = 300): T => {
  const [debounced, setDebounced] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};

// focus hook
export const useFocus = () => {
  const [isFocus, setIsFocus] = React.useState(false);
  const toggleFocus = () => setIsFocus((prev) => !prev);
  return { isFocus, toggleFocus };
};

// toggle show password hook
export const useShowPassword = (initial = false) => {
  const [isShow, setIsShow] = React.useState(initial);
  const toggle = () => setIsShow((prev) => !prev);
  return { isShow, toggle };
};
