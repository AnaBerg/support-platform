import { FC } from 'react';
import { Button, styled, ButtonProps } from '@mui/material';

type HeaderButtonProps = {
  onClick: () => void;
  Icon: any;
  text: String;
};

const StyledHeaderButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.white,
}));

const HeaderButton: FC<HeaderButtonProps> = ({ onClick, Icon, text }) => {
  return (
    <StyledHeaderButton onClick={onClick}>
      <Icon />
      {text}
    </StyledHeaderButton>
  );
};

export default HeaderButton;
