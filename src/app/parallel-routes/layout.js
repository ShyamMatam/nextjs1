import React, { Children } from 'react'
import Analytics from './@analytics/page'
import Team from './@team/page'
const layout = ({Children}) => {
  return (
    <>
    <html>
        <body>
         {Children}
         <Analytics />
         <Team />
        </body>
    </html>
    </>
  )
}

export default layout
