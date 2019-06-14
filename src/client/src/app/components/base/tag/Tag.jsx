import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

class Tag extends Component {    
    state = {
        active: false,
        iconVisible: false,
    }

    onClick = (e) => {
        this.setState(prevState => ({
            active: !prevState.active,
            iconVisible: !prevState.iconVisible
        }));
    }

    render () {
        const { classes } = this.props;
        const { active } = this.state;
    
        return (
            <Chip 
                className={['tag', active ? '' : classes.hide ]} 
                color={active ? 'secondary' : 'default'}
                onClick={this.onClick} 
                onDelete={this.onClick}
                clickable 
                {...this.props} 
            />
        )
    }
};

const styles = theme => ({
    hide: {
        '& > svg': {
            visibility: 'hidden'
        }
    }
});

export default withStyles(styles)(Tag);