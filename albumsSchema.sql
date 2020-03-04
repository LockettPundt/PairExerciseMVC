
CREATE DATABASE products;

CREATE TABLE albums (
    id serial primary key,
    title text,
    artist VARCHAR,
    genre text,
    year int
);

CREATE TABLE users (
    id serial primary key,
    name text
);

CREATE TABLE reviews (
    id serial primary key,
    title text,
    stars int CHECK (stars > 0 AND stars < 6),
    review VARCHAR,
    albums_id int REFERENCES albums(id),
    users_id int REFERENCES users(id)
);


INSERT INTO albums (title, artist, genre, year)
    VALUES ('Velvet Underground & Nico', 'Velvet Underground', 'Rock', 1967),
    ('Let''s Groove', 'Earth, Wind and Fire', 'R&B', 1985),
    ('Cant''t Slow Down', 'Lionel Ritchie', 'R&B', 1983),
    ('Face Value', 'Phil Collins', 'Rock', 1981),
    ('It''s Sure Gonna Hurt', 'Dolly Parton', 'Country', 1962),
    ('Sheet Music', '10cc', 'Rock', 1974),
    ('Please Please Please', 'James Brown', 'Funk', 1958),
    ('Player''s Club', 'Marion Meadows', 'Jazz', 2004);

INSERT INTO users (name) 
    VALUES ('Fred Major'),
    ('Lockett Pundt'),
    ('Bobby Tables'),
    ('Chauncey Flanders'),
    ('Allen Green'),
    ('Chris Thomas');

INSERT INTO reviews (title, stars, albums_id, users_id, review)
    VALUES ('I love this album!', 5, 1, 2, 'Grew up listening to this album. One of my favorites!'),
    ('I dig this album', 4, 5, 3, 'Great album!'),
    ('eh', 1, 8, 4, 'Not a fan of jazz, so naturally, I didn''t like this either.'),
    ('What is this record???', 5, 6, 5, 'I don''t know what I''m listening to, but I kinda like it!'),
    ('Funky!', 5, 7, 6, 'Makes me dance and I like to dance!'),
    ('Relaxation', 4, 4, 1, 'Relaxing and always good stuff Phil.'),
    ('Great songs!', 4, 3, 1, 'Classic album! Great hits.'),
    ('Let''s not groove!', 2, 2, 4, 'Let''s not groove and say we did!');