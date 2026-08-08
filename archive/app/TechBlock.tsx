import React, {ReactElement} from 'react'

interface TechBlockProps {
  children?: React.ReactNode;
  name: string
  icon: ReactElement
}

export const TechBlock: React.FC<TechBlockProps> = ({ name, children, icon }) => {
  return (<div className="flex flex-col md:items-center">
    <div className="space-y-2 px-2">
      <div className="flex items-center space-x-2">
        <div className="flex justify-center flex-shrink-0 items-center rounded-full text-primary">
          {icon}
        </div>
        <span className="font-bold">{name}</span>
      </div>
      <div>
        {children}
      </div>
    </div>
  </div>)
}
