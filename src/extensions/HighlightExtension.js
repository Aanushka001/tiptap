import { Mark } from '@tiptap/core'

export const HighlightExtension = Mark.create({
  name: 'highlight',

  addOptions() {
    return {
      colors: ['yellow', 'red', 'blue', 'green', 'purple', 'orange', 'pink', 'cyan'],
      defaultColor: 'yellow',
    }
  },

  parseHTML() {
    return [
      {
        tag: 'span',
        getAttrs: element => {
          const color = element.getAttribute('data-highlight')
          return color ? { color } : false
        },
      },
    ]
  },

  renderHTML({ mark }) {
    return ['span', {
      'data-highlight': mark.attrs.color,
      style: `background-color: ${mark.attrs.color}`,
    }, 0]
  },

  addAttributes() {
    return {
      color: {
        default: 'yellow',
        parseHTML: element => element.getAttribute('data-highlight'),
        renderHTML: attributes => {
          if (!attributes.color) return {}
          return {
            'data-highlight': attributes.color,
            style: `background-color: ${attributes.color}`,
          }
        },
      },
    }
  },

  addCommands() {
    return {
      setHighlight: (color) => ({ commands }) => {
        return commands.setMark(this.name, { color })
      },
      removeHighlight: () => ({ commands }) => {
        return commands.unsetMark(this.name)
      },
    }
  },
})
