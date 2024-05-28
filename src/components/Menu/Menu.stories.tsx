import { MoreHorizontal, User } from 'lucide-react'

import type { Meta, StoryObj } from '@storybook/react'

import { args } from '../../utilities/stories'
import { ActionIcon } from '../ActionIcon'
import { SlateProvider } from '../SlateProvider'
import { Menu } from './'

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: 'Inputs/Menu',
  argTypes: args({}),
  decorators: [
    (Story) => (
      <SlateProvider>
        <Story />
      </SlateProvider>
    )
  ]
}

export default meta
type Story = StoryObj<typeof Menu>

export const Primary: Story = {
  args: {
    children: <ActionIcon icon={MoreHorizontal} />,
    items: [
      {
        id: 'g1',
        label: 'Group 1',
        type: 'group',
        items: [
          {
            id: '1',
            label: 'Item 1',
            type: 'button',
            iconLeft: User
          },
          {
            id: '2',
            label: 'Item 2',
            type: 'button',
            iconLeft: User
          },
          { id: '3', label: 'Item 3', type: 'switch' }
        ]
      },
      { id: '3', label: 'Item 3', type: 'text', value: 'Text' },
      { id: '4', label: 'Item 4444', type: 'checkbox' },
      {
        id: '5',
        label: 'Item 5',
        type: 'subgroup',
        items: [
          { id: '5', label: 'Item 5', type: 'button' },
          { id: '6', label: 'Item 6', type: 'button' },
          { id: '7', label: 'Item 7', type: 'button' }
        ]
      }
    ]
  }
}
