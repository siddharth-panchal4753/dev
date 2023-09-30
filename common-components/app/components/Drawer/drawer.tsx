'use client'

import React, { useState } from 'react'
import Button from '../Buttons/page'
import SideBar from './sidebar/sidebar'

const DrawerComponents = (): JSX.Element => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)
  return (
    <div className="py-8">
      <Button onClick={() => setDrawerOpen(!isDrawerOpen)}>Open Sidebar</Button>

      <SideBar title="SideBar Drawer" isDrawerOpen={isDrawerOpen} setDrawerOpen={() => setDrawerOpen(false)}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </SideBar>
    </div>
  )
}

export default DrawerComponents
