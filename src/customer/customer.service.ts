import { Injectable } from '@nestjs/common';
import { Customer, CustomerInput } from './customer.model';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  createCustomer(input: CustomerInput): Customer {
    const newCustomer: Customer = {
      id: Math.round(Math.random() * 1000),
      name: input.name,
      email: input.email,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  getCustomerById(id: number): Customer {
    return this.customers.find((customer) => customer.id === id);
  }

  updateCustomer(id: number, input: CustomerInput): Customer {
    const customer = this.getCustomerById(id);
    if (customer) {
      customer.name = input.name;
      customer.email = input.email;
      return customer;
    }
    return null;
  }

  deleteCustomer(id: number): boolean {
    const index = this.customers.findIndex((customer) => customer.id === id);
    if (index > -1) {
      this.customers.splice(index, 1);
      return true;
    }
    return false;
  }
}
