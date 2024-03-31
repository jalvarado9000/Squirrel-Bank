import React from 'react'


/* TODO: once the your able to reuse the header eliminate this */

export const HeaderOther = () => {
  return (
      <>
      {/* if nothing is displayed use this as the header */}
      <div className="balance">
          <div><br /></div>
          <span id="currency"></span>
          <span id="balance"><br /></span>
      </div>
      </>
  )
}
