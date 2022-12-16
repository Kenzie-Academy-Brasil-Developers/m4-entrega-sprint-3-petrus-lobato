CREATE TABLE IF NOT EXISTS categories(
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL UNIQUE
);

create extension if not exists "uuid-ossp";

CREATE TABLE products(
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	name VARCHAR(200) NOT NULL,
	price DECIMAL(8,2) NOT NULL,
	id_category INTEGER REFERENCES categories(id) ON DELETE CASCADE 
);

