import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Title from '../base/title';

import '../../layouts/Page.scss';

const styles = theme => ({
    root: {
        flexGrow: 1,
        
    },
    title: {
        flexGrow: 1,
        color: 'white'
    },
    colorDefault: {
        backgroundColor: '#FF5555',
        boxShadow: 'none'
    }
});

function TopNav(props) {
    const { classes, backBar, history } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    if (backBar) {
        return (
            <div className={classes.root}>
                <AppBar className={classes.colorDefault}>
                    <Toolbar>
                        <ArrowBackIcon onClick={() => history.goBack()}/>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.colorDefault}>
                <Toolbar>
                    <Title type={3} className={classes.title}>
                        Limento
                    </Title>
                    <IconButton
                        aria-label="Account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(withStyles(styles)(TopNav));