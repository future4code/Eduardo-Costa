import React from 'react';
import TaskItem from '../TaskItem/TaskItem'
import {StyledTypography} from '../../style/styled'
import Divider from '@material-ui/core/Divider';

export default function Tasks(props) {
    const tasksFiltered = props.tasklist.filter(produto => {
        return(produto.day == props.dia)
    })

    return (
        <div key={props.dia} style={{backgroundColor: props.bgColor}}>
            <StyledTypography align={'center'} variant={'subtitle1'} ><strong>{props.dia}</strong></StyledTypography>
            <Divider />
            {
            tasksFiltered && tasksFiltered.map(element => {
                return (
                    <TaskItem id={
                            element.id
                        }
                        text={
                            element.text
                        }/>
                )
            })
        } </div>
    );
}
