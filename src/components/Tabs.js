import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Question from './Question'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'inherit',
  },
}));

export default function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
    
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const {authedUser,unanswerd ,answerd } = props

  return (
    <div className={classes.root}>
      <AppBar style={{    backgroundColor: 'inherit'}} position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          textColor="primary"
          onChange={handleChange}
          aria-label="nav tabs example"
          
        >
          <LinkTab label="unanswerd" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="answerd" href="/trash" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ul >
          {unanswerd.map((questionID) => (
            <li key={questionID.id}>
              <Question authedUser={authedUser} questionID={questionID.id}/>
            </li>
          ))}
        </ul> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul>
          {answerd.map((questionID) => (
            <li key={questionID.id}>
              <Question authedUser={authedUser} questionID={questionID.id}/>
            </li>
          ))}
        </ul> 
      </TabPanel>
    </div>
  );
}