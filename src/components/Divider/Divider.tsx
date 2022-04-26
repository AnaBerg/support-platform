import { FC } from 'react';

import { Grid, colors } from '@mui/material';

type DividerProps = {
  darkMode?: boolean;
  direction?: 'vertical' | 'horizontal';
};

const Divider: FC<DividerProps> = ({
  darkMode = true,
  direction = 'horizontal',
}) => {
  const styles = () => {
    if (direction === 'horizontal') {
      return {
        height: '1px',
        width: '100%',
        backgroundColor: darkMode ? colors.common.black : colors.common.white,
      };
    } else if (direction === 'vertical') {
      return {
        height: '100%',
        width: '1px',
        backgroundColor: darkMode ? colors.common.black : colors.common.white,
      };
    }
  };

  return (
    <Grid item xs={12}>
      <div style={styles()} />
    </Grid>
  );
};

export default Divider;
