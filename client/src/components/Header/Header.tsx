import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';
import React, { useState, useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import {
  Theme,
  makeStyles,
  withStyles,
  createStyles,
} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Ava from '../../assets/avatar/avatar.jpg';

interface IHeader {
  onIndicator: boolean;
}

const Header: React.FC<IHeader> = (props) => {
  // const [colorIndicator, setColorIndicator] = useState<string>('#44b700');
  // const [indicatorValue, setIndicatorValue] = useState<boolean>(false);
  // eslint-disable-next-line
  // const [stateAvatar, setStateAvatar] = useState<any>([]);

  // useEffect(() => {
  //   setIndicatorValue(props.onIndicator);
  // }, [props.onIndicator]);

  const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
      badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: '$ripple 1.2s infinite ease-in-out',
          border: '1px solid currentColor',
          content: '""',
        },
      },
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(.8)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(2.4)',
          opacity: 0,
        },
      },
    })
  )(Badge);

  return (
    <header className="w-100 p-3 background-header text-dark d-flex justify-content-between">
      <div className="ms-4 h4 d-flex align-items-md-center color-header">
        Image Finder
      </div>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt="Avatar" src={Ava} />
      </StyledBadge>
    </header>
  );
};

export default Header;
