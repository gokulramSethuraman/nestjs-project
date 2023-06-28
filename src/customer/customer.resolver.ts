import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer, CustomerInput } from './customer.model';

@Resolver((of) => Customer)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query((returns) => [Customer])
  customers(): Customer[] {
    return this.customerService.getAllCustomers();
  }

  @Query((returns) => Customer)
  customer(@Args('id', { type: () => Int }) id: number): Customer {
    return this.customerService.getCustomerById(id);
  }

  @Mutation((returns) => Customer)
  createCustomer(@Args('input') input: CustomerInput): Customer {
    return this.customerService.createCustomer(input);
  }

  @Mutation((returns) => Customer)
  updateCustomer(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: CustomerInput,
  ): Customer {
    return this.customerService.updateCustomer(id, input);
  }

  @Mutation((returns) => Boolean)
  deleteCustomer(@Args('id', { type: () => Int }) id: number): boolean {
    return this.customerService.deleteCustomer(id);
  }
}