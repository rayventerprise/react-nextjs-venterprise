'use client'

import {useInView} from 'react-intersection-observer'
import classNames from 'classnames'
import React from "react";

type Props = {
  className?: string
  inViewClass?: string
  outViewClass?: string
  children?: React.ReactNode;
}

export const AnimateDiv: React.FC<Props> = (props) => {
  const { className, children, inViewClass = 'opacity-1', outViewClass = 'opacity-0' } = props

  const [ref, inView] = useInView({
    threshold: .15,
  })

  return (
    <div
      ref={ref}
      className={classNames(className, 'transition-all duration-1000', { [inViewClass]: inView, [outViewClass]: !inView })}
    >
      {children}
    </div>
  )
}
