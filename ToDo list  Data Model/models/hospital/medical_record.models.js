import mongoos from 'mongoos';

const medical_recordSchema = new mongoos.Schema({},{timestamp:true});

export const Medical_record = mongoos.model('Medical_record', medical_recordSchema);