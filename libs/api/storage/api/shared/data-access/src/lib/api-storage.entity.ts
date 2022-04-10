import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiStorage {
  @Field(() => ID)
  userId!: String;
  @Field(()=> String)
  fileCategory!: String;
  @Field(() => String)
  fileExtension!: String;
  @Field(()=>String)
  filePath!: String;
}