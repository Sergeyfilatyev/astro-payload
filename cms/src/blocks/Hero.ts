import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: {
    singular: 'Первый экран',
    plural: 'Первые экраны',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Заголовок',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'Текст под заголовком',
    },
    {
      name: 'type',
      type: 'select',
      label: 'Тип фона',
      defaultValue: 'simple',
      options: [
        { label: 'Простой', value: 'simple' },
        { label: 'С видео', value: 'video' },
      ],
    },
  ],
}
