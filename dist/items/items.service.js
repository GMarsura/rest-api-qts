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
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const item_entity_1 = require("./entities/item.entity");
let ItemsService = class ItemsService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createItemDto) {
        const item = this.repository.create(createItemDto);
        return await this.repository.save(item);
    }
    async findAll() {
        return await this.repository.find({ relations: ['pedido', 'produto'] });
    }
    async findOne(id) {
        const item = await this.repository.findOne({
            where: { id },
            relations: ['pedido', 'produto'],
        });
        if (!item) {
            throw new common_1.NotFoundException(`Item #${id} não encontrado`);
        }
        return item;
    }
    async update(id, updateItemDto) {
        const item = await this.findOne(id);
        this.repository.merge(item, updateItemDto);
        return await this.repository.save(item);
    }
    async remove(id) {
        const item = await this.findOne(id);
        await this.repository.remove(item);
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(item_entity_1.ItemPedido)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ItemsService);
//# sourceMappingURL=items.service.js.map