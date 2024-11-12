import mongoos from 'mongoos';

const orderItemSchema = new mongoos.Schema(
  {
    productId:{
      type: mongoos.Schema.Type.ObjrctId,
      ref:"Product"
    },
    quantity:{
      type:Number,
      required:true
    }
  }
  );

const orderSchema = new mongoos.Schema(
  {
    orderPrice:{
      type:Number,
      required:true
    },
    customer:{
      type: mongoos.Schema.Types.ObjectId,
      ref:"User"
    },
    orderItems:{
      type: [orderItemSchema]
    },
    adress:{
      type:String,
      required:true
    }, 
    status:{
      type:String,
      enum:["PENDING","CANCELLED", "DELIVERED"],
      default:'PENDING'
    }
  },{timestamps: true}
  );

export const Order = mongoos.model('Order', orderSchema);  