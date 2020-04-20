import React, {useState} from 'react';
import {connect} from "react-redux"
import {createNewTask, getTasks} from '../../actions/Actions'
import {CreatorWrapper} from '../../style/styled'


function Creator(props) {
const [inputTaskName, setInputTaskName] = useState("");
const [selectedDay, setSelectedDay] = useState("");

const handleWhithSubmit = (event) => {
    event.preventDefault()
    props.createNewTask(inputTaskName, selectedDay)
    setInputTaskName("")
}

    return (
        <CreatorWrapper>
            <form onSubmit={handleWhithSubmit}>
                <input type='text' onChange={(event) => {setInputTaskName(event.target.value)}} value={inputTaskName}></input>
                <select onChange={(event) => {setSelectedDay(event.target.value)}}>
                    <option value="">Selecione...</option>
                    <option value="Domingo">Domingo</option>
                    <option value="Segunda">Segunda</option>
                    <option value="Terça">Terça</option>
                    <option value="Quarta">Quarta</option>
                    <option value="Quinta">Quinta</option>
                    <option value="Sexta">Sexta</option>
                    <option value="Sabado">Sabado</option>
                </select>
                <button type='submit' >Cadastrar tarefa</button>
            </form>
        </CreatorWrapper>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
    createNewTask: (name, day) => dispatch(createNewTask(name, day)),
    getTasks: () => dispatch(getTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Creator)