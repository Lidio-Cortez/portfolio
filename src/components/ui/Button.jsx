import React from 'react';

export function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-mono text-xs font-medium px-6 py-3 transition-all duration-200";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-sm",
    secondary: "border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5",
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
}