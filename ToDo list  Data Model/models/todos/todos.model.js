import mongoos from 'mongoos'

const todoSchema = new mongoos.Schema(
  {
   content:{
     type: String,
     required: true
   },
   complete:{
     type: true,
     default: false    
   },
   createdBy:{
     type: mongoos.Schema.Tpyes.ObjectId,
     ref: "User"
   },
   subTodo:[  // Arrey of SubTOdos
    {
      type: mongoos.Schema.Types.ObjectId,
      ref: "SubTodo"
    }
   ] 

  },{timestamps : true}
);

export const Todo = mongoos.model('Todo', todoSchema);