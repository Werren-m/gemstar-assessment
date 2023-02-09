import React from 'react'
import { Divider, Grid, Icon, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import ContentPasteSearchSharpIcon from '@mui/icons-material/ContentPasteSearchSharp'
import DashboardIcon from '@mui/icons-material/DashboardOutlined'
import PortraitIcon from '@mui/icons-material/Portrait'
import SettingsIcon from '@mui/icons-material/Settings'

import styles from './styles'

const useStyle = makeStyles(styles)

const Drawer = () => {
  const classes = useStyle()

  return (
    <Grid>
      <Grid className={classes.drawerHeaderContainer}>
        <Typography fontSize={40}>Logo</Typography>
      </Grid>
      <Grid className={classes.drawerBodyContainer}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3164&q=80"
            alt="missing"
          />
        </div>
        <div className={classes.drawerSection}>
          <Typography>Radhika Dhawan Puri</Typography>
          <Typography>Senior Client Services</Typography>
        </div>
        <Divider className={classes.divider} />
        <Grid className={classes.drawerSectionContainer}>
          <div className={classes.drawerSection}>
            <Typography className={classes.sectionHeaderText}>
              Navigation
            </Typography>
            <div className={classes.drawerMenu}>
              <div className={classes.drawerMenuContainer}>
                <Typography className={classes.sectionBodyText}>
                  <DashboardIcon className={classes.icon} />
                  Dashboard
                </Typography>
              </div>
              <div className={classes.drawerMenuContainer}>
                <Typography className={classes.sectionBodyText}>
                  <ContentPasteSearchSharpIcon className={classes.icon} />
                  Approvals
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Divider className={classes.divider} />
        <Grid>
          <div className={classes.drawerSection}>
            <Typography className={classes.sectionHeaderText}>
              My Account
            </Typography>
            <div className={classes.drawerMenu}>
              <div className={classes.drawerMenuContainer}>
                <Typography className={classes.sectionBodyText}>
                  <PortraitIcon className={classes.icon} />
                  My clients
                </Typography>
              </div>
              <div className={classes.drawerMenuContainer}>
                <Typography className={classes.sectionBodyText}>
                  <SettingsIcon className={classes.icon} />
                  Edit profiles
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Drawer
