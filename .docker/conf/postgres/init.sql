CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255),
  email TEXT,
  item VARCHAR(255),
  quantity INT,
  total_price INT
);

INSERT INTO invoices VALUES (DEFAULT, 'Tommy Bejo', 'Tommybejo@gmail.com', 'barang1', 2, 100000);
INSERT INTO invoices VALUES (DEFAULT, 'Joko widodo', 'Jokowi@gmail.com', 'barang2', 1, 50000);
INSERT INTO invoices VALUES (DEFAULT, 'Jusuf kalla', 'jusufkalla@gmail.com', 'barang3', 3, 150000);
INSERT INTO invoices VALUES (DEFAULT, 'Tommy Bejo', 'Tommybejo@gmail.com', 'barang2', 2, 100000);
INSERT INTO invoices VALUES (DEFAULT, 'Robert garcia', 'robertgarcia@gmail.com', 'barang2', 2, 100000);
INSERT INTO invoices VALUES (DEFAULT, 'Prabowo subianto', 'prabowo@gmail.com', 'barang3', 1, 120000);
INSERT INTO invoices VALUES (DEFAULT, 'Sandiaga Uno', 'sandiuno@gmail.com', 'barang1', 2, 100000);
INSERT INTO invoices VALUES (DEFAULT, 'Maruf amin', 'amin@gmail.com', 'barang3', 3, 150000);

CREATE extension tablefunc;