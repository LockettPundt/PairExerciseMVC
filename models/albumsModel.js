'use strict'

const db = require('./conn');


class AlbumsModel {
    constructor(id, title, artist, genre, year) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.year = year;
    }

    static async getAllAlbums() {
        try {
            const response = await db.any(`SELECT * FROM ALBUMS`);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async getAllReviews(id) {
        try {
            const response = await db.any(`
            SELECT *,
            reviews.title AS review_title
            FROM reviews 
            JOIN users 
            ON users_id = users.id 
            JOIN albums 
            ON albums_id = albums.id 
            WHERE albums_id = ${id};`);
            return response;
        } catch (error) {
            return error;
        }
    }
    
    static async createReview(album_id, user_id, stars, review_title, review_text) {
        try {
            const response = await db.one(`INSERT INTO reviews (albums_id, users_id, stars, title, review) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
            [album_id, user_id, stars, review_title, review_text]);
            return response;
        } catch (error) {
            return error;
        }
    }
}


module.exports = AlbumsModel;