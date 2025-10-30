export default {
  content: [
    "./templates/**/*.{html,js,md,toml}",
    "./content/**/*.{html,md}",
    "./themes/**/*.{html,js,md,toml}"
  ],
  darkMode: 'class', // Enables toggling dark mode via a 'dark' class on <html> or <body>
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // blue
        secondary: "#f59e0b", // amber
        accent: "#10b981",    // emerald
        neutral: "#f3f4f6",   // light gray
        darkBg: "#1f2937",    // dark background
        darkText: "#f9fafb",   // light text for dark mode
        prose: {
          body: "#374151",    // gray-700
          headings: "#111827", // gray-900
          lead: "#6b7280",     // gray-500
          link: "#2563eb",     // blue-600
          bold: "#111827",     // gray-900
          counter: "#6b7280",  // gray-500
          bullet: "#6b7280",   // gray-500
          hr: "#e5e7eb",       // gray-200
          quote: "#111827",    // gray-900
          'quote-border': "#3b82f6", // blue-500
          caption: "#6b7280",  // gray-500
          code: "#111827",     // gray-900
          'code-bg': "#f3f4f6", // gray-100
          pre: "#e5e7eb",      // gray-200
          'pre-bg': "#1f2937", // gray-800
          th: "#374151",       // gray-700
          td: "#6b7280",       // gray-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'ui-monospace', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.prose.body'),
            maxWidth: 'none',
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            '> * + *': {
              marginTop: '1.5rem',
            },
            h1: {
              color: theme('colors.prose.headings'),
              fontSize: '2.25rem',
              fontWeight: '700',
              lineHeight: '2.5rem',
              marginTop: '3rem',
              marginBottom: '1.5rem',
              fontFamily: theme('fontFamily.serif').join(', '),
            },
            h2: {
              color: theme('colors.prose.headings'),
              fontSize: '1.875rem',
              fontWeight: '600',
              lineHeight: '2.25rem',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
              fontFamily: theme('fontFamily.serif').join(', '),
            },
            h3: {
              color: theme('colors.prose.headings'),
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: '2rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h4: {
              color: theme('colors.prose.headings'),
              fontSize: '1.25rem',
              fontWeight: '600',
              lineHeight: '1.75rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            strong: {
              color: theme('colors.prose.bold'),
              fontWeight: '600',
            },
            a: {
              color: theme('colors.prose.link'),
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '2px',
              fontWeight: '500',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            blockquote: {
              fontStyle: 'italic',
              color: theme('colors.prose.quote'),
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.prose.quote-border'),
              backgroundColor: theme('colors.blue.50'),
              padding: '1rem 1.5rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              margin: '2rem 0',
              position: 'relative',
              '&::before': {
                content: '"\\201C"',
                fontSize: '4rem',
                color: theme('colors.blue.200'),
                position: 'absolute',
                top: '-0.5rem',
                left: '0.5rem',
                lineHeight: '1',
              },
            },
            code: {
              color: theme('colors.prose.code'),
              backgroundColor: theme('colors.prose.code-bg'),
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '500',
              border: `1px solid ${theme('colors.gray.200')}`,
            },
            pre: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.prose.pre-bg'),
              padding: '1.5rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              border: `1px solid ${theme('colors.gray.700')}`,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              code: {
                backgroundColor: 'transparent',
                padding: '0',
                border: 'none',
                color: 'inherit',
              },
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              margin: '1.25rem 0',
              li: {
                margin: '0.5rem 0',
                paddingLeft: '0.25rem',
              },
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
              margin: '1.25rem 0',
              li: {
                margin: '0.5rem 0',
                paddingLeft: '0.25rem',
              },
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              margin: '2rem 0',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
            thead: {
              backgroundColor: theme('colors.gray.50'),
            },
            th: {
              color: theme('colors.prose.th'),
              fontWeight: '600',
              padding: '0.75rem 1rem',
              textAlign: 'left',
              borderBottom: `1px solid ${theme('colors.gray.200')}`,
            },
            td: {
              color: theme('colors.prose.td'),
              padding: '0.75rem 1rem',
              borderBottom: `1px solid ${theme('colors.gray.100')}`,
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: theme('colors.gray.50'),
            },
            img: {
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              margin: '2rem 0',
            },
            hr: {
              borderColor: theme('colors.prose.hr'),
              margin: '3rem 0',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
