import { cn } from '@/lib/utils';
import React from 'react';

// ----------------------------------------------------------------------

type Props = {
  className?: string;
};

const baseUlClasses = `p-0 flex items-center justify-center text-blue-500 [&>li]:w-8 [&>li]:h-8 [&>li]:opacity-50 [&>li]:flex [&>li]:items-center [&>li]:justify-center [&>li]:cursor-pointer [&>li.slick-active]:opacity-100 [&>li.slick-active>div>span]:shadow-carousel-dot`;

export default function CarouselDots({ className }: Props) {
  const ulClassName = cn(
    baseUlClasses,
    className
  );

  return {
    appendDots: (dots: React.ReactNode) => (
      <>
        <ul className={ulClassName}>
          {dots}
        </ul>
      </>
    ),
    customPaging: () => (
      <div className="flex items-center justify-center w-full h-full z-50 dot">
        <span className="bg-info w-4 h-4 rounded-full transition-all ease-in-out duration-200" />
      </div>
    ),
  };
}