INSERT INTO restaurants VALUES(1, 'Los Tacos', 'Denver', 'CO', 'Mexican', 5);

INSERT INTO restaurants (id, name, city, state, cuisine, rating, imageurl, bio) VALUES
(1, 'Los Tacos', 'Denver', 'CO', 'Mexican', 5, '/images/mexican.png', 'yummy Mexican food'),
(2, 'Burger Bar', 'Seattle', 'WA', 'American', 5, '/images/burger.png','delicious vegan food'),
(3, 'Pasta Freddy’s', 'Sacramento', 'CA', 'Italian', 3, '/images/italian.png','lots of pizza'),
(4, 'Bangkok Grill', 'Brooklyn', 'NY', 'Thai', 2, '/images/thai.jpg', 'stuffed thai chilis!'),
(5, 'Pho Mazing', 'Boulder', 'CO', 'Vietnamese', 2, '/images/pho.jpg','vegan pho!'), 
(6, 'Fiestaritos', 'Lincoln', 'NE', 'Mexican', 1, '/images/mexican.png','nasty tacos');

-- INSERT INTO restaurants (imageURL) VALUES
-- ('/images/mexican.png', '/images/burger.png', '/images/italian.png', '/images/thai.jpg', '/images/pho.jpg', '/images/mexican.png')

CREATE TABLE restaurants (
id SERIAL PRIMARY KEY, 
name VARCHAR(150),
city VARCHAR(150),
state VARCHAR(150),
cuisine VARCHAR (150),
rating SMALLINT,
imageURL VARCHAR(150),
bio VARCHAR(150)
);