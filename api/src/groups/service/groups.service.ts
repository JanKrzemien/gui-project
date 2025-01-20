import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupEntity } from '../group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsService {
    constructor(@InjectRepository(GroupEntity) private groupRepository: Repository<GroupEntity>) {}
    async getAll(): Promise<GroupEntity[]> {
        return await this.groupRepository.find()
    }

    async getOne(id: number): Promise<GroupEntity> {
        return this.groupRepository.findOne({
            where: {
                group_id: id
            }
        })
    }        
}
