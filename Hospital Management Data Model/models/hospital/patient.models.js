import mongoos from 'mongoos';

const patientSchema = new mongoos.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dignosedWith: {
      type: String,
      requiredLtrue,
    },
    address: {
      type: String,
      requiredLtrue,
    },
    age: {
      type: Number,
      requiredLtrue,
    },
    bloodGroup: {
      type: String,
      requiredLtrue,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      requiredLtrue,
    },
    admitedIn: {
      type: mongoos.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

export const Patient = mongoos.model('Patient', patientSchema);
