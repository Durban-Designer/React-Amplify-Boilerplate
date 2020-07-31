module.exports = {
  typography: {
    useNextVariants: true,
    fontFamily: '"Montserrat", sans-serif',
    color: 'primary',
  },
  overrides: {
    MuiSelect: {
      select: {
        textAlign: 'left',
        '&:focus': {
          backgroundColor: '#fff',
        }
      },
    },
    MuiTooltip: {
      tooltipPlacementLeft: {
        backgroundColor: '#fff',
        border: '1px solid #ff0000',
        color: '#000',
        fontWeight: 'bold',
      },
    },
    MuiDrawer: {
      paper: {
        overflowX: 'scroll',
        overflowY: 'visible'
      },
    },
    MuiButton: {
      root: {
        fontFamily: '"Montserrat", sans-serif',
      },
    },
    MuiStepLabel: {
      label: {
        color: '#fff !important',
      }
    },
    MuiStepIcon: {
      root: {
        color: '#b0b0b0',
        width: 'auto',
        height: '4vh',
        zIndex: 3,
      },
      active: {
        color: '#ff0000 !important',
        zIndex: 3,
      },
      completed: {
        color: '#ff0000 !important',
        zIndex: 3,
      },
      text: {
        color: 'white',
        fill: 'inherit'
      }
    },
    MuiDivider: {
      root: {
        position: 'absolute',
        left: 0,
        height: '2px',
        width: '100vw',
      },
    },
  },
  palette: {
    primary: { main: '#ffffff' },
    secondary: { main: '#252525' },
    tertiary: { main: '#ff0000' },
  },
}
