import React from 'react'
import {cn} from "@/lib/utils";


const Container = ({ children, ClassName, }: { children: React.ReactNode, ClassName?: string; }) => {
  return (
    <div className={cn("max-w-4xl  mx-auto min-h-screen bg-white ", ClassName)}>
      {children}
    </div>
  )
}

export default Container;



// <div className="sticky top-0 right-0 -right-px h-40 w-40 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>