import { Story, Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'
import Popup from '.'

export default {
  title: 'Popup',
  component: Popup,
} as Meta

export const Default: Story = (args) => {
  const [modalOpen, setModalOpen] = useState(false)

  function toggleModal(): void {
    setModalOpen(false)
  }

  return (
    <Popup isOpen={modalOpen} setIsClose={toggleModal} {...args}>
      <div>
        <p>ddddddddddddd</p>
        <p>ddddddddddddd</p>
        <p>ddddddddddddd</p>
        <p>ddddddddddddd</p>
      </div>
    </Popup>
  )
}
