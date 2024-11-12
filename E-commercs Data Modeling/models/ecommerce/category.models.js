import mongoos from 'mongoos';

const categorySchema = new mongoos.Schema(
  {
    name:{
      type:String,
      required:true
    }
  }, { timestamps: true }
  );

export const Category = mongoos.model('Category', categorySchema);
