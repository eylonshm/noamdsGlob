import RatingBar from './index'

export default {
  title: 'components/RatingBar',
  component: RatingBar,
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
    label: 'RatingBar',
    rating: 4.3,
  },
}
