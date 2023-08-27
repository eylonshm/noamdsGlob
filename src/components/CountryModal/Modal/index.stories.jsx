import Modal from './index'

export default {
  title: 'components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Small = {
  args: {
    size: 'small',
    label: 'Modal',
  },
}
