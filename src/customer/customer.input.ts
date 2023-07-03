import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CustomerInput {
  @Field()
  name: string;

  @Field()
  email: string;
}
