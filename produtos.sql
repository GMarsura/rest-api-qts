CREATE DATABASE produtos_db;
USE produtos_db;

-- tbl_categoria
CREATE TABLE tbl_categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30)
);


-- tbl_produtos
CREATE TABLE tbl_produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    id_categoria INT,
    preco FLOAT,
    FOREIGN KEY (id_categoria) REFERENCES tbl_categoria(id)
);


-- tbl_status


-- tbl_endereco
CREATE TABLE tbl_endereco (
    id INT AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(400),
    cep VARCHAR(8),
    numero INT,
    bairro VARCHAR(100),
    cidade VARCHAR(50)
);



-- tbl_cliente
CREATE TABLE tbl_cliente (
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    telefone VARCHAR(12),
    nome VARCHAR(100),
    limite FLOAT,
    id_endereco INT,
    status VARCHAR(10) DEFAULT 'ruim' CHECK (status IN ('bom', 'médio', 'ruim')),
    FOREIGN KEY (id_endereco) REFERENCES tbl_endereco(id),
);



-- tbl_pedido
CREATE TABLE tbl_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_elaboracao DATE,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES tbl_cliente(id)
);


-- tbl_itempedido
CREATE TABLE tbl_itempedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_produto INT,
    qnt INT,
    FOREIGN KEY (id_pedido) REFERENCES tbl_pedido(id),
    FOREIGN KEY (id_produto) REFERENCES tbl_produtos(id)
);