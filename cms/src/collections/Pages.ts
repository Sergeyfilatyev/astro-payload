import { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Content } from '../blocks/Content'


export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
  },
  access: {
    read: () => true, // Разрешаем Astro читать данные
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Название страницы (для админки)',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'URL страницы (например: home, about)',
      unique: true,
    },
    // ВОТ ОНО - ГЛАВНОЕ ПОЛЕ:
    {
      name: 'layout',
      type: 'blocks', // Тип поля "Blocks"
      label: 'Конструктор страницы',
      blocks: [
        // Список разрешенных блоков
        Hero,
        Content,
      ],
    },
  ],
}