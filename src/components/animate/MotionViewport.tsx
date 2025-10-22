'use client'
import { m, MotionProps } from 'framer-motion';
// hooks
import { useIsMobile } from '@/hooks/useMobile';
//
import { varContainer } from './variants';

type IProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;

interface Props extends IProps {
  children: React.ReactNode;
  disableAnimatedMobile?: boolean;
}

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}: Props) {
  const isMobile = useIsMobile()

  if (isMobile && disableAnimatedMobile) {
    return <div {...other}>{children}</div>;
  }

  return (
    <m.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </m.div>
  );
}
