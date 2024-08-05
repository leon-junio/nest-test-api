import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

describe('CompanyController', () => {
  let companyController: CompanyController;

  beforeEach(async () => {
    const company: TestingModule = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [CompanyService],
    }).compile();

    companyController = company.get<CompanyController>(CompanyController);
  });

  describe('root', () => {
    it('should return {Company[]} object', () => {
      expect(companyController.findAll()).toBeInstanceOf(Object);
    });
    it('should return {Company} object', () => {
      expect(companyController.findOne(1)).toBeInstanceOf(Object);
    });
    it('should return {Company} object', () => {
      expect(
        companyController.create({
          name: 'test',
          description: 'test',
          cnpj: 'test',
          active: true,
        }),
      ).toBeInstanceOf(Object);
    });
    it('should return {Company} object', () => {
      companyController.create({
        name: 'test',
        description: 'test',
        cnpj: 'test',
        active: true,
      }),
        expect(
          companyController.update(1, {
            description: 'test-change',
            cnpj: 'test',
            active: true,
          }),
        ).toBeInstanceOf(Object);
    });
  });
});
