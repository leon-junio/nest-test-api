import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './interface/company.interface';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @Get()
  async findAll(): Promise<Company[]> {
    return this.companyService.getAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Company> {
    return this.companyService.getById(id);
  }
  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyService.createCompany(createCompanyDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return this.companyService.updateCompany(id, updateCompanyDto);
  }
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number): Promise<Company[]> {
    return this.companyService.deleteCompany(id);
  }
}
