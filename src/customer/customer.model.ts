// customer.model.ts
import { InputType, ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}

@InputType()
export class CustomerInput {
  @Field()
  name: string;

  @Field()
  email: string;
}

@InputType()
export class CustomerUpdateInput {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;
}
