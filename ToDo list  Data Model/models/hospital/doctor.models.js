import mongoos from 'mongoos';

const doctorSchema = new mongoos.Schema(
  {
    name:{
      type:String,
      required:true
    },
    salery:{
      type:String,
      required:true
    },
    qualification:{
      type:String,
      required:true
    },
    experienceInYear:{
      type:Number,
      default:0
    },
    worksInHospitals:{
      [
        {
          type:mongoos.Schema.Types.ObjectId,
          ref:'Hospital'
        }
      ]
    },
  },{timestamps:true}
  );

export const Doctor = mongoos.model('Doctor', doctorSchema);  