import React from 'react';
import {Logo, OrganizeDiv} from './styled'
import logoImage from '../../img/logo.PNG'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import { CardMedia } from '@material-ui/core';


export default function ButtonAppBar() {
    return (
        <div>
            <OrganizeDiv>
                <Logo src={logoImage}/>
                {/* <CardMedia 
  component="video"
  src="https://www.spacex.com/sites/spacex/files/spx01_fairing-1080_v3.mp4"
  title="Contemplative Reptile"
  autoplay
/> */}
                <SupervisorAccountRoundedIcon fontSize={'large'}/>
            </OrganizeDiv>
        </div>
    );
}

