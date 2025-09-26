import { cn } from '@/lib/utils';
import React, { ElementType } from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'compact';
  noMaxWidth?: boolean; // allow full-bleed if needed
}

/**
 * Section: consistent horizontal & vertical spacing wrapper.
 * - default: larger vertical rhythm for major content
 * - compact: slightly reduced for subordinate sections
 */
export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  size = 'default',
  noMaxWidth = false,
}) => {
  // New tighter vertical rhythm (base 8 -> scaled) per user request
  // default: py-8 md:py-12, compact: py-6 md:py-8
  const vertical = size === 'compact' ? 'py-6 md:py-8' : 'py-8 md:py-12';
  return (
    <section id={id} className={cn('px-4 md:px-6', vertical, className)}>
      <div className={cn('mx-auto w-full', !noMaxWidth && 'max-w-4xl')}>{children}</div>
    </section>
  );
};

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className, as = 'h2', ...rest }) => {
  const Tag: ElementType = as;
  return <Tag className={cn('section-heading', className)} {...rest}>{children}</Tag>;
};

export default Section;