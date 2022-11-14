import { Module } from "@nestjs/common";
import { LambdaService } from "./lambda/lambda.service";
// import { NotLambdaService as LambdaService } from './not-lambda/not-lambda.service'; //TODO esto esta para localhost

@Module({
	imports: [],
	controllers: [],
	providers: [LambdaService],
})
export class AppModule {}
