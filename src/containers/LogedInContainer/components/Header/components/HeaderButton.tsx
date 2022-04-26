import { FC } from 'react';
import { Button, styled, ButtonProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

type HeaderButtonProps = {
  onClick?: () => void;
  Icon?: any;
  text: String;
};

const HeaderButton: FC<HeaderButtonProps> = ({ onClick, Icon, text }) => {
  const { t } = useTranslation();

  const StyledHeaderButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.common.white,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start'
  }));

  return (
    <StyledHeaderButton onClick={onClick}>
      <Icon />
      <div style={{ width: '5px' }} />
      {t(`${text}`)}
    </StyledHeaderButton>
  );
};

export default HeaderButton;
