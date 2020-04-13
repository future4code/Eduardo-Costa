import React from 'react';
import {StyledTypography} from '../../style/styled'
import Divider from '@material-ui/core/Divider';


export default function TaskItem(props) {
    return (
        <div key={props.id}>
            <StyledTypography align={'justify'} variant={'body1'}>{
                props.text
            }</StyledTypography>
            <Divider variant={'middle'} light={true}/>
        </div>
    );
}
