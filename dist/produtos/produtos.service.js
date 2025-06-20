"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produto_entity_1 = require("./entities/produto.entity");
let ProdutosService = class ProdutosService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createProdutoDto) {
        const produto = this.repository.create(createProdutoDto);
        return await this.repository.save(produto);
    }
    async findAll() {
        return await this.repository.find({ relations: ['categoria'] });
    }
    async findOne(id) {
        const produto = await this.repository.findOne({
            where: { id },
            relations: ['categoria'],
        });
        if (!produto) {
            throw new common_1.NotFoundException(`Produto #${id} não encontrado`);
        }
        return produto;
    }
    async update(id, updateProdutoDto) {
        const produto = await this.findOne(id);
        this.repository.merge(produto, updateProdutoDto);
        return await this.repository.save(produto);
    }
    async remove(id) {
        const produto = await this.findOne(id);
        await this.repository.remove(produto);
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map