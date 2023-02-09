const theme = () => {
  return {
    drawerHeaderContainer: {
      backgroundColor: '#1E67AF',
      textTransform: 'uppercase',
      color: 'white',
      textAlign: 'center',
      minHeight: 65,
    },

    drawerBodyContainer: {
      minHeight: '95vh',
      backgroundColor: '#8F8E8E',
      padding: '29px 28px',
    },

    imageContainer: {
      borderRadius: '50%',
      width: '63px',
      height: '63px',
    },

    image: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
    },

    drawerSection: {
      gap: 1,
      margin: '29px 0px',
      color: 'white',
    },

    divider: {
      backgroundColor: 'white',
    },

    sectionHeaderText: {
      fontFamily: 'Nunito !important',
      fontStyle: 'normal !important',
      fontWeight: '400 !important',
      fontSize: '11px !important',
      lineHeight: '15px !important',
      letterSpacing: '0.16em !important',
      textTransform: 'uppercase !important',
    },

    drawerMenuContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '10px',
    },

    icon: {
      height: '15px !important',
      width: '15px !important',
      marginRight: 10,
    },

    drawerMenu: {
      marginTop: 12,
    },

    drawerSectionContainer: {
      margin: '15px 0px',
    },

    sectionBodyText: {
      '&:hover': {
        color: '#1E67AF',
        cursor: 'pointer',
      },
    },
  }
}

export default theme
