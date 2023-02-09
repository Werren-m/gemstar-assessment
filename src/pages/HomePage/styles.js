const styles = () => {
  return {
    drawerContainer: {
      float: 'left',
      maxWidth: '15vw',
    },

    pageContainer: {
      overflow: 'auto',
    },

    welcomeText: {
      fontFamily: 'Nunito !important',
      fontStyle: 'normal !important',
      fontWeight: '700 !important',
      fontSize: '28px !important',
      lineHeight: '29px !important',
      marginBottom: '44px !important',
    },

    placeholderContainer: {
      gap: 10,
    },

    searchBar: {
      minHeight: '65px',
    },

    logoutText: {
      marginLeft: '11px !important',
    },

    menuContainer: {
      position: 'absolute',
      right: '20px',
      top: '20px',
      display: 'flex',
    },

    menuButtonContainer: {
      borderRadius: '50%',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'rgba(51, 170, 51, .1)',
      },
    },

    logoutSection: {
      display: 'flex',
      marginRight: '25px',
      color: '#EE0D0D',
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },

    bodyContainer: {
      padding: 33,
    },

    companyLogo: {
      marginBottom: 16,
      marginTop: 21,
      maxHeight: 26,
    },

    companyNameText: {
      fontWeight: '700 !important',
      fontSize: '16px !important',
      lineHeight: '20px !important',
    },

    descriptionText: {
      fontSize: '11px !important',
      lineHeight: '15px !important',
      marginTop: '10px !important',
    },

    companyContainer: {
      display: 'flex',
      flexDirection: 'row',
      // justifyContent: 'space-between',
      gap: 20,
      marginTop: 24,
    },

    card: {
      maxWidth: 259,
      height: 184,
      padding: 21,
      border: 'black 1px solid',
    },

    moreIcon: {
      float: 'right',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'rgba(51, 170, 51, .1)',
      },
    },

    recentSelectionHeader: {
      fontWeight: '700 !important',
      fontSize: '20px !important',
      lineHeight: '27px !important',
    },

    recentSelectionDescription: {
      fontSize: '14px !important',
      lineHeight: '19px !important',
    },

    recentSectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 56,
    },

    clientListText: {
      fontWeight: '700 !important',
      fontSize: '20px !important',
      lineHeight: '27px !important',
    },

    createApprovalButton: {
      borderRadius: '45px !important',
      alignSelf: 'center !important',
      padding: 10,
    },

    approvalContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      border: 'black 1px solid',
      borderRadius: '25px',
      margin: '10px 0px',
      padding: 8,
    },

    approvalLogo: {
      height: '5%',
      width: '5%',
    },

    approvalMainContainer: {
      marginTop: 50,
    },
  }
}

export default styles
