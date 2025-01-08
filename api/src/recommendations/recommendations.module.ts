import { Module } from '@nestjs/common';
import { RecommendationsService } from './service/recommendations.service';

@Module({
  providers: [RecommendationsService]
})
export class RecommendationsModule {}
