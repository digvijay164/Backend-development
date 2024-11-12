import mongoos from 'mongoos';

const productSchema = new mongoos.Schema(
  {
    name:{
      type:String,
      required:true
    },
    discription:{
      type:String,
      required:true
    },
    productImage:{
      type:String
    },
    price:{
      type:Number,
      default:0
    },
    stock:{
      type:Number,
      default:0
    },
    category:{
      type: mongoos.Schema.Types.ObjectId,
      ref: "Category",
      required:true
    },
    owner:{
      type: mongoos.Schema.Types.ObjectId,
      ref:"User"
    }
  },{timestamps:true}
  );

export const Product = mongoos.model('Product', productSchema);