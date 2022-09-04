import { ArgTypes, Meta } from '@storybook/html'

/** you can checkup all controll options usage here: 
* https://storybook.js.org/docs/react/essentials/controls#annotation */

type Control = {
  control?: {
    type: 'select'
    | 'radio'
    | 'range'
    | 'file'
    | 'object'
    | 'check'
    | 'inline-check'
    | 'inline-radio'
    | 'date'
    | 'text'
    | 'boolean'
    | 'multi-select'
    | 'date'
    | 'color'
    min?: number,
    max?: number,
    step?: number,
    accept?: string,
    presetColor?: string,
  },
}

interface CreateStoreProps<T> extends Meta {
  argTypes?: ArgTypes<T> & {
    [key in keyof T]?: Control
  }
}

export type { CreateStoreProps }