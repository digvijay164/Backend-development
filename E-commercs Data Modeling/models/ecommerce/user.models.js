import mongoos from 'mongoos';

const userSchema = new mongoos.Schema(
  {
    username : {
      type: String,
      required: true,
      lowercase: true,
      unique:true
    },
    email:{
      type:String,
      required: true,
      unique: true
    },
    password:{
      type:String,
      required:true
    }
  },{timestamps: true}
  );

export const User = mongoos.model("User", userSchema);