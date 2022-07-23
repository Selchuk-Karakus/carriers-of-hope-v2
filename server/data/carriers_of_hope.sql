DROP TABLE if exists products CASCADE;
DROP TABLE if exists members CASCADE;
DROP TABLE if exists orders CASCADE;
DROP TABLE if exists order_item CASCADE;
DROP TABLE if exists cart CASCADE;
DROP TABLE if exists cart_item CASCADE;
CREATE TABLE members (
  id           SERIAL PRIMARY KEY,
  first_name   VARCHAR( 30 ) NOT NULL,
  last_name    VARCHAR( 30 ) NOT NULL,
  email        VARCHAR( 120 ) NOT NULL UNIQUE,
  address      VARCHAR( 120 ) NOT NULL,
  city         VARCHAR( 30 ) NOT NULL,
  postcode     VARCHAR( 8 ) NOT NULL,
  country      VARCHAR( 20 ) NOT NULL,
  telephone    NUMERIC NOT NULL,
  password     VARCHAR( 100 ) NOT NULL,
  isAdmin      BOOLEAN NOT NULL
);

CREATE TABLE products (
    id               SERIAL PRIMARY KEY,
    product_name     VARCHAR(30) NOT NULL,
    category_name    VARCHAR(30) NOT NULL,
    product_status   BOOLEAN,
    description      VARCHAR(170)
);

CREATE TABLE orders (
    id              SERIAL PRIMARY KEY,
    order_date      DATE NOT NULL,
    order_ref       VARCHAR(10) NOT NULL,
    member_id       INT REFERENCES members(id),
    order_status    VARCHAR(20) NOT NULL
);

CREATE TABLE order_item (
    id              SERIAL PRIMARY KEY,
    quantity        INT NOT NULL,
    order_id        INT REFERENCES orders(id),
    product_id      INT REFERENCES products(id)
);

CREATE TABLE cart (
    id              SERIAL PRIMARY KEY,
    member_id       INT REFERENCES members(id)
);

CREATE TABLE cart_item (
    id              SERIAL PRIMARY KEY,
    cart_id         INT REFERENCES cart(id),
    product_id      INT REFERENCES products(id),
    created_at      TIMESTAMP DEFAULT NULL,
    quantity        INT NOT NULL
);

INSERT INTO members (first_name, last_name, email, address, city, postcode, country, telephone, password, isAdmin)
  VALUES ('John','Smith','j.smith@johnsmith.org','11 New Road','Liverpool','L10 2AB','UK',12345678910, 'johnsmith', FALSE),
         ('Selchuk','Karakus','s.karakus@johnsmith.org','12 New Road','London','L10 2AB','UK', 23456789101, 'selchukkarakus', FALSE),
         ('Helen','Rog','h.rog@johnsmith.org','13 New Road','London','L10 2AB','UK', 34567891234, 'helenrog', FALSE),
         ('Mahri','Atdayeva','m.atdayeva@johnsmith.org','14 New Road','London','L10 2AB','UK', 45678912345, 'mahriatdayeva', FALSE),
         ('Sami','Hakim','s.hakim@johnsmith.org','15 New Road','London','L10 2AB','UK', 56789012345, 'samihakim', TRUE),
         ('Hedyeh','Etemadi','h.etemedi@johnsmith.org','16 New Road','Manchester','L10 2AB','UK', 67890123456, 'hedyehetemaddi', TRUE),
         ('Olga','Olga','o.olga@johnsmith.org','17 New Road','London','L10 2AB','UK', 78901234567, 'olgaolga', TRUE);
         ('george', 'Karakus', 'h@kklllkk8.org', '25 New Road', 'London', 'L10 2AB', 'UK', 23456789101, '$2b$10$1mfWjqXDwpPAbwVcvfs8IumGSzUwubsvPYpn76Hm6b1os/WssVrc2', TRUE);

INSERT INTO products (product_name, category_name),
    VALUES  ('Single bed frame', 'Furniture', true),
            ('Double bed frame', 'Furniture', true),
            ('Bunk beds', 'Furniture', true),
            ('Toddler/child bed', 'Furniture', true),
            ('Single mattress', 'Furniture', true),
            ('Double mattress',  'Furniture', true),
            ('Toddler/child mattress',  'Furniture', true),
            ('Sofa',  'Furniture', true),
            ('Armchair',  'Furniture', true),
            ('Sofabed',  'Furniture', true),
            ('Dining table',  'Furniture', true), 
            ('Dining chairs', 'Furniture', true ),
            ('Coffee/side table',  'Furniture', true),
            ('Bedside cabinet', 'Furniture', true),
            ('Chest of drawers',  'Furniture', true),
            ('Book shelf',  'Furniture', true),
            ('Washing machine', 'Electrical items', true),
            ('Fridge freezer', 'Electrical items', true),
            ('Fridge','Electrical items', true),
            ('Freezer','Electrical items', true),
            ('Microwave','Electrical items', true),
            ('Toaster','Electrical items', true),
            ('Kettle','Electrical items', true),
            ('Iron','Electrical items', true),
            ('Lamp','Electrical items', true),
            ('Rice cooker/slow cooker','Electrical items', true),
            ('Blender','Electrical items', true),
            ('Fan','Electrical items', true),
            ('Heater','Electrical items', true),
            ('Plates', , 'Household', true),
            ('Bowls', 'Household', true),
            ('Glasses', 'Household', true),
            ('Cups', 'Household', true),
            ('Cutlery', 'Household', true),
            ('Pans', 'Household', true),
            ('Pots', 'Household', true),
            ('Cooking utensils', 'Household', true),
            ('Mixing bowl', 'Household', true),
            ('Kitchen knives', 'Household', true),
            ('Bin', 'Household', true),
            ('Mirror', 'Household', true),
            ('Ironing board', 'Household', true),
            ('Clothes airer', 'Household', true),
            ('Single duvet', 'Household', true),
            ('Double duvet', 'Household', true),
            ('Single bedding', 'Household', true),
            ('Double bedding', 'Household', true),
            ('Pillows', 'Household', true),
            ('Towels', 'Household', true),
            ('Blankets', 'Household', true),
            ('Cleaning products', 'Household', true),
            ('Mop', 'Household', true),
            ('Broom', 'Household', true),
            ('Toilet paper', 'Household', true),
            ('Deodorant', 'Toiletries', true),
            ('Shampoo', 'Toiletries', true),
            ('Conditioner', 'Toiletries', true),
            ('Shower gel', 'Toiletries', true),
            ('Soap', 'Toiletries', true),
            ('Lotion', 'Toiletries', true),
            ('Suncream', 'Toiletries', true),
            ('Handwash', 'Toiletries', true),
            ('Hand sanitiser', 'Toiletries', true),
            ('Tampons', 'Toiletries', true),
            ('Sanitary towels', 'Toiletries', true),
            ('Continence pads', 'Toiletries', true),
            ('Aptamil 1 milk', 'Baby', true),
            ('Nappies - various sizes', 'Baby', true),
            ('Wipes', 'Baby', true),
            ('Clothes', 'Baby', true),
            ('Single pushchair', 'Baby', true),
            ('Double pushchair', 'Baby', true),
            ('Baby bath', 'Baby', true),
            ('Moses basket', 'Baby', true),
            ('Baby toiletries', 'Baby', true),
            ('Highchair', 'Baby', true),
            ('Toys', 'Baby', true),
            ('Bottles for feeding', 'Baby', true),
            ('Bottle steriliser', 'Baby', true),
            ('Breast pads', 'Baby', true),
            ('Maternity pads', 'Baby', true),
            ('Laptop', 'Other', true),
            ('Wheelchair', 'Other', true);

INSERT INTO orders (order_date, order_ref, member_id, order_status) VALUES 
('2019-08-01', 'ORD001', 1, 'PENDING'),
('2019-07-15', 'ORD002', 2, 'PENDING'),
('2019-07-15', 'ORD003', 2, 'APPROVED'),
('2019-07-15', 'ORD004', 2, 'CANCELLED'),
('2019-07-15', 'ORD005', 2, 'PENDING'),
('2019-07-11', 'ORD006', 3, 'PENDING'),
('2019-05-01', 'ORD007', 4, 'PENDING'),
('2019-05-29', 'ORD008', 5, 'PENDING'),
('2019-04-01', 'ORD009', 6, 'PENDING'),
('2019-04-02', 'ORD0010', 7, 'PENDING');

INSERT INTO order_item (quantity, order_id, product_id) VALUES
(1, 1, 6),
(1, 2, 2),
(1, 2, 3),
(1, 3, 5),
(1, 4, 3),
(1, 5, 1);

INSERT INTO cart (member_id) VALUES
(1),
(2),
(3),
(4),
(5),
(6);

INSERT INTO cart_item (cart_id, product_id, quantity, created_at) VALUES
(1, 1, 1, NULL),
(2, 2, 1, NULL),
(3, 3, 1, NULL),
(4, 4, 1, NULL),
(5, 5, 1, NULL),
(6, 6, 1, NULL);
