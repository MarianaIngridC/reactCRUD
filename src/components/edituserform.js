import React from 'react';
import {useForm} from 'react-hook-form'

const EditUserForm=(props)=>{

	const {register,errors, handleSubmit, setValue}=useForm({
		defaultValues: props.currentUser//brings me the values of the user that I want to edit
	});
	setValue('name', props.currentUser.name)
	setValue('username', props.currentUser.username)

	const onSubmit=(data,e)=>{
		console.log(data)
		data.id=props.currentUser.id
		props.updateUser(props.currentUser.id,data)
		props.addUser(data)

		//clean fields
		e.target.reset();
	}

	return(
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>Name</label>
			<input
				type="text" 
				name="name" 
				ref={register({required: {value:true, message:"valor requerido"}
				})
			}/>
			<div>
				{errors?.username?.message}
			</div>
			<label>Username</label>
			<input type="text" name="username" ref={
				register({
					required: {value:true, message:"valor requerido"}
				})
			}/>
			<div>
				{errors?.username?.message}
			</div>
			<button type="submit">Edit user</button>
			<button onClick={()=> props.setEditing(false)} className="button muted-button">
				Cancel
			</button>
		</form>
		
		)
}
export default EditUserForm;