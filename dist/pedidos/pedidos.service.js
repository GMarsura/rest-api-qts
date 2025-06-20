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
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pedido_entity_1 = require("./entities/pedido.entity");
let PedidosService = class PedidosService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createPedidoDto) {
        const pedido = this.repository.create(createPedidoDto);
        return await this.repository.save(pedido);
    }
    async findAll() {
        return await this.repository.find({
            relations: ['cliente', 'itens'],
        });
    }
    async findOne(id) {
        const pedido = await this.repository.findOne({
            where: { id },
            relations: ['cliente', 'itens'],
        });
        if (!pedido) {
            throw new common_1.NotFoundException(`Pedido #${id} não encontrado`);
        }
        return pedido;
    }
    async update(id, updatePedidoDto) {
        const pedido = await this.findOne(id);
        this.repository.merge(pedido, updatePedidoDto);
        return await this.repository.save(pedido);
    }
    async remove(id) {
        const pedido = await this.findOne(id);
        await this.repository.remove(pedido);
    }
};
exports.PedidosService = PedidosService;
exports.PedidosService = PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pedido_entity_1.Pedido)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PedidosService);
//# sourceMappingURL=pedidos.service.js.map