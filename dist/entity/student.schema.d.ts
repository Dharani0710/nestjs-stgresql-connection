import * as mongoose from 'mongoose';
export declare const StudentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    agr?: number;
    city?: string;
    initial?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string;
    agr?: number;
    city?: string;
    initial?: string;
}>> & mongoose.FlatRecord<{
    name?: string;
    agr?: number;
    city?: string;
    initial?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
