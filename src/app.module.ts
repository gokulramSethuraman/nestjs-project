import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CustomerResolver } from './customer/customer.resolver';
import { CustomerService } from './customer/customer.service';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   autoSchemaFile: 'schema.gql',
    // }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        // include: [ProductModule],
        playground: true,
        // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        autoSchemaFile: 'schema.gql',
        sortSchema: true,
  
      }),
  ],
  providers: [CustomerResolver, CustomerService],
})
export class AppModule {}