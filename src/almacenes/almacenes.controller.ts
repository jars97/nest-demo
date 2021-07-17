import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AlmacenesEntity } from './almacenes.entity';
import { AlmacenesService } from './almacenes.service';


@Controller('almacenes')
export class AlmacenesController {
    constructor (private almacenesService : AlmacenesService){}
    
    @Get()
    async findAll(): Promise<AlmacenesEntity[]>{
        return this.almacenesService.findAll();
    }

    @Get(':id')
    async  findById(@Param('id') id: string): Promise<AlmacenesEntity>{
        return this.almacenesService.findById(id);
    }

    @Post()
    async create(@Body() body: AlmacenesEntity): Promise<AlmacenesEntity> {
        return this.almacenesService.create(body);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() body: AlmacenesEntity): Promise<AlmacenesEntity> {
        return this.almacenesService.update(id, body);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<void> {
        return this.almacenesService.delete(id);
    }

    @Get('/page/:page/records/:records')
    async findAllPaginated(@Param('page') page:number,@Param('records') records : number): Promise<AlmacenesEntity[]>{
        return this.almacenesService.getAllpaginated(page,records);
    }
}
