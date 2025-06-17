"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const clientes_module_1 = require("./clientes/clientes.module");
const pedidos_module_1 = require("./pedidos/pedidos.module");
const produtos_module_1 = require("./produtos/produtos.module");
const items_module_1 = require("./items/items.module");
const enderecos_module_1 = require("./enderecos/enderecos.module");
const categorias_module_1 = require("./categorias/categorias.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.HOST,
                port: 3306,
                username: process.env.USER,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: false,
            }),
            clientes_module_1.ClientesModule, pedidos_module_1.PedidosModule, produtos_module_1.ProdutosModule, items_module_1.ItemsModule, enderecos_module_1.EnderecosModule, categorias_module_1.CategoriasModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map