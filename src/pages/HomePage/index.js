import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Card, Grid, Paper, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import styles from './styles'

import { getMarketValue } from '../../api'
import dbsLogo from '../../assets/dbs_logo.png'
import proudfootLogo from '../../assets/proudfoot_logo.png'
import rmiLogo from '../../assets/rmi_logo.png'
import Drawer from '../../components/Drawer'

const useStyle = makeStyles(styles)

const CustomCard = ({ logo, companyName, description }) => {
  const classes = useStyle()

  return (
    <Card className={classes.card}>
      <MoreHorizIcon className={classes.moreIcon} />
      <img src={logo} className={classes.companyLogo} />
      <Typography className={classes.companyNameText}>{companyName}</Typography>
      <Typography className={classes.descriptionText}>{description}</Typography>
    </Card>
  )
}

const ApprovalCell = ({ image, name, current_price, market_cap }) => {
  const classes = useStyle()

  return (
    <Grid className={classes.approvalContainer}>
      <img src={image} className={classes.approvalLogo} />
      <Typography>{name}</Typography>
      <Typography>{current_price}</Typography>
      <Typography>{market_cap}</Typography>
    </Grid>
  )
}

const HomePage = () => {
  const classes = useStyle()
  const [coinValues, setCoinValues] = useState([])

  useEffect(() => {
    getValue()
  }, [])

  const getValue = async () => {
    try {
      const response = await getMarketValue()
      setCoinValues(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const companies = [
    {
      image: dbsLogo,
      companyName: 'DBS Bank',
      description:
        'DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.',
    },
    {
      image: proudfootLogo,
      companyName: 'Proudfoot',
      description:
        'Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.',
    },
    {
      image: rmiLogo,
      companyName: 'RMI',
      description:
        'RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.',
    },
  ]

  console.log(coinValues, 'haha')

  return (
    <Grid className={classes.mainContainer}>
      <Grid className={classes.drawerContainer}>
        <Drawer />
      </Grid>
      <Grid className={classes.pageContainer}>
        <div className={classes.searchBarContainer}>
          <TextField
            fullWidth
            placeholder="Search anything here"
            className={classes.searchBar}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  className={classes.placeholderContainer}
                >
                  <SearchIcon />
                </InputAdornment>
              ),
              className: classes.searchBar,
            }}
          />
        </div>
        <Grid className={classes.menuContainer}>
          <div className={classes.logoutSection}>
            <LogoutIcon />
            <Typography className={classes.logoutText}>Logout</Typography>
          </div>
          <div className={classes.menuButtonContainer}>
            <MenuIcon />
          </div>
        </Grid>
        <Grid className={classes.bodyContainer}>
          <Typography className={classes.welcomeText}>
            Hi Radhika, welcome back!
          </Typography>
          <Grid className={classes.clientContainer} gap={10}>
            <Typography className={classes.clientListText}>
              Your client list
            </Typography>
            <Typography className={classes.recentSelectionDescription}>
              You currently servicing 3 clients
            </Typography>
            <Grid className={classes.companyContainer}>
              {companies.map((company) => {
                const { image, companyName, description } = company
                return (
                  <CustomCard
                    logo={image}
                    companyName={companyName}
                    description={description}
                    key={`${image}${companyName}`}
                  />
                )
              })}
            </Grid>
          </Grid>
          <Grid>
            <Grid className={classes.recentSectionContainer}>
              <div>
                <Typography className={classes.recentSelectionHeader}>
                  Recent approval
                </Typography>
                <Typography className={classes.recentSelectionDescription}>
                  You can find the recent on-going approvals here
                </Typography>
              </div>
              <Button
                className={classes.createApprovalButton}
                variant="contained"
              >
                + Create new approval
              </Button>
            </Grid>
            <Grid className={classes.approvalMainContainer}>
              <Grid className={classes.approvalContainer}>
                <Typography>Image</Typography>
                <Typography>Name</Typography>
                <Typography>Current Value</Typography>
                <Typography>Market Cap</Typography>
              </Grid>
              {coinValues.length > 0 &&
                coinValues.map((value) => {
                  const { image, name, current_price, market_cap } = value
                  return (
                    <ApprovalCell
                      image={image}
                      name={name}
                      current_price={current_price}
                      market_cap={market_cap}
                      key={`${image}${name}`}
                      className={classes.approvalCell}
                    />
                  )
                })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage
