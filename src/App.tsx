
import React, {useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Input } from '@mui/material'
import Button from '@mui/material/Button'


 




export default function App(){



  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    fontSize:30
  }))
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize:20
  }))



  interface ITodo {
    text: string
    complete: boolean
  }
 
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])


  function Submit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addTodo(value)
    setValue('')
  
  }

  function addTodo (text: string) {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newTodos)
   
  }


  function completeTodo(index: number){
    const newTodos: ITodo[] = [...todos]
 
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  
  }

  function deleteTodo (index: number){
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index,+1)
    setTodos(newTodos)
    
  }

  return (
<>
<Box sx={{ flexGrow: 1}} >
 <Grid container spacing={1}>
 <Grid item  xs={2.45}>
       <Item>نام وظیفه</Item>
   
     </Grid>

     <Grid item xs={9}>
       <Item>لیست کار ها</Item>
     </Grid>

      
      <form  onSubmit={Submit} >
        <Input 
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          required
          style={{paddingLeft: 15}}
         
        
         
        />
          <Button variant="contained" color="success" type='submit'>
        اضافه شود
      </Button>


       
      </form>
       


   <Grid item xs={9}>
     
              {todos.map((todo: ITodo, index: number) => {
          return (
            <>
       
           <Item2>
          
            <div key={index} />
              <div
                style={{ textDecoration: todo.complete ? 'line-through' : '' }}
              >
                {todo.text}
              <br></br>
              
              <Button type='button' onClick={() => completeTodo(index)}>
                {
                todo.complete ? 
                <Button variant="contained" type='button' color="error" >انجام نشد</Button>
                : 
                <Button variant="contained" type='button' color="success" >انجام شد</Button>
               }
               </Button>
        
              
              <Button variant="contained" type='button' color="error" onClick={() =>deleteTodo(index)}>
                حذف وظیفه
              </Button>


            </div>
            
          </Item2>
            </>
         
          )
        })}
       </Grid>
    
      

      </Grid>
    </Box>

</>

  )
}

