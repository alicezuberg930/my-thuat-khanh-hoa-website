'use client'
import { m, MotionProps } from 'framer-motion';
import { varSlide } from './variants';
import { Typography, TypographyProps } from '../ui/Typography';

type Props = MotionProps & TypographyProps;

interface TextAnimateProps extends Props {
  text: string;
}

export default function TextAnimate({ text, variants, ...other }: TextAnimateProps) {
  const AnimatedTyphgraphy = m(Typography)

  return (
    <AnimatedTyphgraphy
      variants={variants || varSlide().inLeft}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varSlide().inLeft}>
          {letter}
        </m.span>
      ))}
    </AnimatedTyphgraphy>
  );
}
