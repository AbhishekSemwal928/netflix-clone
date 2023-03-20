import React from 'react'

function NavbarItem({label}) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
        {label}
    </div>
  )
}

export default NavbarItem