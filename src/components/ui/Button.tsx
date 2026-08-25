"use client";

import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

// Drag/animation handlers clash between React's DOM typings and Framer Motion's own.
type MotionConflictingProps =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd";

type ButtonAsLink = ButtonBaseProps & {
  href: string;
} & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof ButtonBaseProps | MotionConflictingProps
  >;

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
} & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonBaseProps | MotionConflictingProps
  >;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles = {
  primary: "bg-terracotta text-white shadow-sm shadow-terracotta/30 hover:bg-terracotta/90",
  secondary: "bg-clay/10 text-foreground hover:bg-clay/20",
  ghost: "bg-transparent text-foreground hover:bg-clay/10",
  outline: "border border-white/60 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15",
} as const;

const sizeStyles = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
} as const;

const tapTransition: Transition = { type: "spring", stiffness: 400, damping: 25 };

const MotionLink = motion.create(Link);

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors",
    "outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <MotionLink
        href={href}
        className={styles}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={tapTransition}
        {...(props as Omit<
          React.AnchorHTMLAttributes<HTMLAnchorElement>,
          MotionConflictingProps
        >)}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={styles}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={tapTransition}
      {...(props as Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        MotionConflictingProps
      >)}
    >
      {children}
    </motion.button>
  );
}
