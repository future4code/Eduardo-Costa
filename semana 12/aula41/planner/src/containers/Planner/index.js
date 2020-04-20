import React, {useState, useEffect, Component} from 'react';
import { connect } from "react-redux";
import Creator from '../Creator/Creator'
import {TasksDiv, PlannerWrapper, CreatorWrapper} from '../../style/styled'
import Tasks from '../Tasks/Tasks'
import {getTasks} from '../../actions/Actions'

function Planner(props) {
  useEffect(() => {
    props.getTasks()
  }, [])
    return (
      <PlannerWrapper>
        <CreatorWrapper><Creator/></CreatorWrapper>
        <TasksDiv>
          <Tasks dia={'Domingo'} tasklist={props.tasksList} bgColor={'#91CB62'} />
          <Tasks dia={'Segunda'} tasklist={props.tasksList} bgColor={'#70C247'} />
          <Tasks dia={'Terça'} tasklist={props.tasksList} bgColor={'#5EC9AF'} />
          <Tasks dia={'Quarta'} tasklist={props.tasksList} bgColor={'#6681CC'} />
          <Tasks dia={'Quinta'} tasklist={props.tasksList} bgColor={'#A066CC'} />
          <Tasks dia={'Sexta'} tasklist={props.tasksList} bgColor={'#CCA866'} />
          <Tasks dia={'Sabado'} tasklist={props.tasksList} bgColor={'#CC6692'} />
        </TasksDiv>
      </PlannerWrapper>
    )
}

const mapStateToProps = state => ({tasksList: state.tasks.tasks});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Planner)