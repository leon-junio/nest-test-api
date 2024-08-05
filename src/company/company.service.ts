import { Injectable } from '@nestjs/common';
import { Company } from './interface/company.interface';

@Injectable()
export class CompanyService {
  private readonly companies: Company[] = [];
  getById(id: number): Company {
    return this.companies.find((company) => company.id == id);
  }
  getAll(): Company[] {
    return this.companies;
  }
  createCompany(omitCompany: Omit<Company, 'id'>): Company {
    const company: Company = {
      id: this.companies.length + 1,
      ...omitCompany,
    };
    this.companies.push(company);
    return company;
  }
  updateCompany(id: number, partialCompany: Partial<Company>): Company {
    const index = this.companies.findIndex((company) => company.id == id);
    if (index === -1) {
      throw new Error('Company not found');
    }
    const updatedCompany = {
      ...this.companies[index],
      ...partialCompany,
    };
    this.companies[index] = updatedCompany;
    return this.companies[index];
  }
  deleteCompany(id: number): Company[] {
    const index = this.companies.findIndex((company) => company.id == id);
    if (index === -1) {
      throw new Error('Company not found');
    }
    return this.companies.splice(index, 1);
  }
}
