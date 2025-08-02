import type { Preview } from '@storybook/react-vite'

// .storybook/preview.js
export const viewports = {
  desktop2xl: {
    name: 'Desktop 2xl',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  laptopLg: {
    name: 'Laptop lg',
    styles: {
      width: '1536px',
      height: '864px',
    },
  },
  laptopMd: {
    name: 'Laptop md',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  laptopSm: {
    name: 'Laptop sm',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '320px'
    }
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    viewport: {
      options: {
        ...viewports
      }
    }
  },
};

export default preview;