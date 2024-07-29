import { forwardRef } from 'react';

import * as RSlider from '@radix-ui/react-slider';

import { cn } from '../../utilities';
import { Tooltip } from '../Tooltip';
import { SliderProps } from './Slider.types';

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  ({ tooltip, className, styles, ...props }, ref) => (
    <RSlider.Root
      className={cn(
        'relative flex items-center select-none touch-none w-full h-5',
        className
      )}
      ref={ref}
      style={styles?.root}
      {...props}
    >
      <RSlider.Track
        className="bg-muted relative grow rounded-full h-[3px]"
        style={styles?.track}
      >
        <RSlider.Range
          className="absolute bg-primary rounded-full h-full"
          style={styles?.range}
        />
      </RSlider.Track>
      <Tooltip content={tooltip} delayDuration={0}>
        <RSlider.Thumb
          className="block w-4 border cursor-pointer border-white h-4 bg-primary rounded-full focus:outline-none"
          style={styles?.thumb}
        />
      </Tooltip>
    </RSlider.Root>
  )
)
Slider.displayName = 'Slider'
