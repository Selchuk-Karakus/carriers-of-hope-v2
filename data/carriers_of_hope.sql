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
    product_status   BOOLEAN NOT NULL,
    description      VARCHAR(250) NOT Null
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
    product_id      INT REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE cart (
    id              SERIAL PRIMARY KEY,
    member_id       INT REFERENCES members(id)
);

CREATE TABLE cart_item (
    id              SERIAL PRIMARY KEY,
    cart_id         INT REFERENCES cart(id),
    product_id      INT REFERENCES products(id) ON DELETE CASCADE,
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
         ('Olga','Olga','o.olga@johnsmith.org','17 New Road','London','L10 2AB','UK', 78901234567, 'olgaolga', TRUE),
         ('george', 'Karakus', 'h@kklllkk8.org', '25 New Road', 'London', 'L10 2AB', 'UK', 23456789101, '$2b$10$1mfWjqXDwpPAbwVcvfs8IumGSzUwubsvPYpn76Hm6b1os/WssVrc2', TRUE);

INSERT INTO products (product_name, category_name,product_status, description )
    VALUES  ('Single bed frame', 'Furniture', true, 'In Good condition, The color is white'),
            ('Double bed frame', 'Furniture', true, 'In Good condition, The color is grey'),
            ('Bunk beds', 'Furniture', true, 'In Good condition, The color is white'),
            ('Toddler/child bed', 'Furniture', true, 'In Good condition, The color is white'),
            ('Single mattress', 'Furniture', true, 'In Good condition, The color is white'),
            ('Double mattress',  'Furniture', true, 'In Good condition, The color is white'),
            ('Toddler/child mattress',  'Furniture', true, 'In Good condition, The color is white'),
            ('Sofa',  'Furniture', true, 'In Good condition, The color is green'),
            ('Armchair',  'Furniture', true, 'In Good condition, The color is brown'),
            ('Sofabed',  'Furniture', true, 'In Good condition, The color is brown'),
            ('Dining table',  'Furniture', true, 'In Good condition, The color is white'), 
            ('Dining chairs', 'Furniture', true ,'In Good condition, The color is white'),
            ('Coffee/side table',  'Furniture', true, 'In Good condition, The color is white'),
            ('Bedside cabinet', 'Furniture', true, 'In Good condition, The color is grey'),
            ('Chest of drawers',  'Furniture', true, 'In Good condition, The color is grey'),
            ('Book shelf',  'Furniture', true,'In Good condition, The color is brown'),
            ('Washing machine', 'Electrical items', true, 'In Good condition, The color is white, Wash capasity 6kg'),
            ('Fridge freezer', 'Electrical items', true, 'In Good condition, The color is white'),
            ('Fridge','Electrical items', true, 'In Good condition, The color is white'),
            ('Freezer','Electrical items', true, 'In Good condition, The color is white'),
            ('Microwave','Electrical items', true, 'In Good condition, The color is black'),
            ('Toaster','Electrical items', true, 'In Good condition, The color is black'),
            ('Kettle','Electrical items', true, 'In Good condition, The color is black'),
            ('Iron','Electrical items', true, 'In Good condition, The color is blue'),
            ('Lamp','Electrical items', true, 'In Good condition, The color is grey'),
            ('Rice cooker/slow cooker','Electrical items', true, 'In Good condition, The color is grey'),
            ('Blender','Electrical items', true,'In Good condition, The color is white'),
            ('Fan','Electrical items', true,'In Good condition, The color is white'),
            ('Heater','Electrical items', true,'In Good condition, The color is white'),
            ('Plates', 'Household', true, 'In Good condition, The color is white, 4 person'),
            ('Bowls', 'Household', true, 'In Good condition, The color is white, 2items'),
            ('Glasses', 'Household', true, 'In Good condition, The color is white, 6 person'),
            ('Cups', 'Household', true, 'In Good condition, The color is white, 6 person'),
            ('Cutlery', 'Household', true, 'In Good condition, The color is white, 4 pieces'),
            ('Pans', 'Household', true, 'In Good condition, The color is black'),
            ('Pots', 'Household', true, 'In Good condition, The color is black'),
            ('Cooking utensils', 'Household', true,'In Good condition, The color is black, 5 pieces'),
            ('Mixing bowl', 'Household', true, 'In Good condition, The color is grey, 2 items'),
            ('Kitchen knives', 'Household', true, 'In Good condition, The color is white, 2 pieces'),
            ('Bin', 'Household', true, 'In Good condition, The color is black, 2 items'),
            ('Mirror', 'Household', true, 'In Good condition, The color is white'),
            ('Ironing board', 'Household', true, 'In Good condition, Solid and stable'),
            ('Clothes airer', 'Household', true, 'In Good condition, The color is white,'),
            ('Single duvet', 'Household', true, 'New, The color is white'),
            ('Double duvet', 'Household', true,'In Good condition, The color is white' ),
            ('Single bedding', 'Household', true, 'In Good condition, The color is white'),
            ('Double bedding', 'Household', true, 'In Good condition, The color is white'),
            ('Pillows', 'Household', true, 'New, The color is white, 2 items'),
            ('Towels', 'Household', true, 'New, The color is white, 2 items'),
            ('Blankets', 'Household', true, 'New, The color is white, 2 items'),
            ('Cleaning products', 'Household', true, 'New, House cleaning products'),
            ('Mop', 'Household', true, 'New, House cleaning products'),
            ('Broom', 'Household', true,'New, House cleaning products'),
            ('Toilet paper', 'Household', true, 'New, 12 roll'),
            ('Deodorant', 'Toiletries', true, 'New, Deodorant spray'),
            ('Shampoo', 'Toiletries', true, 'New, Shampoo for all types, 450ml'),
            ('Conditioner', 'Toiletries', true,  'New, For all types, 250ml'),
            ('Shower gel', 'Toiletries', true, 'New, For all skin types, 250ml'),
            ('Soap', 'Toiletries', true, 'New, For all skin types, 250ml'),
            ('Lotion', 'Toiletries', true, 'New, For all skin types, 150ml'),
            ('Suncream', 'Toiletries', true, 'New, For all skin types, 150ml'),
            ('Handwash', 'Toiletries', true, 'New, For all skin types, 250ml'),
            ('Hand sanitiser', 'Toiletries', true, 'New, For all skin types, 250ml'),
            ('Tampons', 'Toiletries', true, 'New, 10 pieces'),
            ('Sanitary towels', 'Toiletries', true, 'New, Small size, Color: white'),
            ('Continence pads', 'Toiletries', true,  'New, 30 pieces'),
            ('Aptamil 1 milk', 'Baby', true, 'New, Baby Milk Formula Powder from Birth 800g'),
            ('Nappies - various sizes', 'Baby', true, 'New , Size 1,2,3,4,5'),
            ('Wipes', 'Baby', true, 'New, 60 pieces'),
            ('Clothes', 'Baby', true, 'In Good Condition, Gently used'),
            ('Single pushchair', 'Baby', true,'In Good Condition, Gently used' ),
            ('Double pushchair', 'Baby', true, 'In Good Condition, Gently used'),
            ('Baby bath', 'Baby', true, 'In Good Condition, Gently used'),
            ('Moses basket', 'Baby', true, 'In Good Condition, Gently used'),
            ('Baby toiletries', 'Baby', true, 'New'),
            ('Highchair', 'Baby', true, 'In Good Condition, Gently used'),
            ('Toys', 'Baby', true, 'In Good Condition, Gently used'),
            ('Bottles for feeding', 'Baby', true, 'New , Various sizes'),
            ('Bottle steriliser', 'Baby', true, 'New'),
            ('Breast pads', 'Baby', true, 'New, 10pieces'),
            ('Maternity pads', 'Baby', true, 'New, 30 pieces'),
            ('Laptop', 'Other', true, 'In Good Condition, Gently used'),
            ('Wheelchair', 'Other', true, 'In Good Condition, Gently used');

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
