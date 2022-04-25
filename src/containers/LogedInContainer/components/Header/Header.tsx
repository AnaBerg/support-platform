import { Grid, GridProps, Typography, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { HeaderButton } from './components';

import SettingsIcon from '@mui/icons-material/Settings';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import EvStationIcon from '@mui/icons-material/EvStation';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SecurityIcon from '@mui/icons-material/Security';

const BackgoundHeader = styled(Grid)<GridProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  padding: 60,
}));

const Header = () => {
  const { t } = useTranslation();

  return (
    <BackgoundHeader container>
      <Grid item xs={12}>
        <Typography color="white" align="center" variant="h5">
          {`${t('VOLTZ').toUpperCase()} | ${t('RETOOL').toLocaleUpperCase()}`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <HeaderButton
          onClick={() => console.log('a')}
          text="b"
          Icon={SettingsIcon}
        />
      </Grid>
    </BackgoundHeader>
  );
};

export default Header;
