import React from 'react'
import { useNavigate } from 'react-router-dom';
import { 
    FormButton, 
    FormContainer, 
    FormExtras, 
    FormHeader, 
    FormIcon, 
    FormInput, 
    FormLabel, 
    FormLink, 
    FormText, 
    FormWrapper } from '../style'
import { FormTextArea } from './style';




const TaskForm = () => {
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        navigate('/dashboard');
    }
    
  return (
    <FormWrapper width='60%' color='white'>
        <FormHeader>NEW TASK DETAILS</FormHeader>
        <FormContainer task='true' onSubmit={handleSubmit}>
            <FormLabel for='taskTitle'>Task Title</FormLabel>
            <FormInput type='text' id='taskTitle' name='taskTitle' placeholder='Name this task' required/>
            <FormLabel for='taskDeadline'>Task Deadline</FormLabel>
            <FormInput type='text' id='taskDeadline' name='taskDeadline' placeholder='Enter a deadline' required />
            <FormLabel for='assignedTo'>Assigned To</FormLabel>
            <FormInput type='text' id='assignedTo' name='assignedTo' placeholder='Enter reciepients name' required/>
            <FormLabel for='addNote'>Add Note</FormLabel>
            <FormTextArea>Type Note</FormTextArea>
            <FormExtras justify='end'>
                <FormButton width='20%' type='submit'>Add new task</FormButton>
            </FormExtras>
        </FormContainer>
    </FormWrapper>
  )
}

export default TaskForm;