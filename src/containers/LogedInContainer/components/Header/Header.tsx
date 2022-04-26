import {
  Grid,
  GridProps,
  Typography,
  styled,
  Button,
  ButtonProps,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { HeaderButton } from './components';
import { Divider } from '../../../../components';

import { user } from '../../../../types/user';
import capitalize from '../../../../utils/captalize';
import changeLanguage from '../../../../utils/changeLanguage';

import SettingsIcon from '@mui/icons-material/Settings';
import EvStationIcon from '@mui/icons-material/EvStation';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SecurityIcon from '@mui/icons-material/Security';

const Header = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { name, auth } = user;

  const BackgoundHeader = styled(Grid)<GridProps>(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    padding: 60,
  }));

  const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.common.white,
  }));

  const buttonList = [
    { text: 'DASHBOARD', icon: SettingsIcon, onCLick: () => history.push('/') },
    {
      text: 'STATIONS',
      icon: EvStationIcon,
      onCLick: () => history.push('/stations'),
    },
    {
      text: 'BATTERIES',
      icon: BatteryCharging90Icon,
      onCLick: () => history.push('/batteries'),
    },
    {
      text: 'SUPPORT',
      icon: HeadsetMicIcon,
      onCLick: () => history.push('/support'),
    },
    {
      text: 'ADMINISTRATION',
      icon: SecurityIcon,
      onClick: () => history.push('/administration'),
    },
  ];

  return (
    <BackgoundHeader container>
      <Grid item xs={12}>
        <Typography color="white" align="center" variant="h5">
          {`${t('VOLTZ').toUpperCase()} | ${t('RETOOL').toUpperCase()}`}
        </Typography>
      </Grid>
      {buttonList.map(({ text, icon, onClick }, i) => (
        <Grid item xs={12} key={i}>
          <HeaderButton onClick={onClick} Icon={icon} text={text} />
        </Grid>
      ))}
      <Divider darkMode={false} />
      <div style={{ height: '30%', width: '100%' }}>
        <Grid item xs={12}>
          <Typography color="white" align="left" variant="h6">
            {`${capitalize(t('USER'))}:`}
          </Typography>
          <Typography color="white">{name}</Typography>
        </Grid>
        <div style={{ height: '20px' }} />
        <Grid item xs={12}>
          <Typography color="white" align="left" variant="h6">
            {`${capitalize(t('PERMISSION'))}:`}
          </Typography>
          <Typography color="white">{capitalize(t(`${auth}`))}</Typography>
        </Grid>
      </div>
      <div>
        <StyledButton size="large" onClick={() => changeLanguage('pt')}>
          BR
        </StyledButton>
        <StyledButton size="large" onClick={() => changeLanguage('es')}>
          ES
        </StyledButton>
        <StyledButton size="large" onClick={() => changeLanguage('en')}>
          EN
        </StyledButton>
      </div>
    </BackgoundHeader>
  );
};

export default Header;
