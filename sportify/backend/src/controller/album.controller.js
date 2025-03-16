import { Album } from '../models/album.model.js';

export const getAllAlbum = async (req, res, next) => {
    try {
        const albums = await Album.find();
        res.status(200).json(albums);
    } catch (error) {
        console.log("Error when get all album", error);
        next(error);
    }
}

export const getAlbumById = (req, res, next) => {
    try {
        const { id } = req.params;
        const album = Album.findById(id).populate("songs"); // get all songs in album
        if(!album) 
            return res.status(404).json({ message: "Album not found"});
        res.status(200).json(album);
    } catch (error) {
        console.log("Error when get album by id", error);
        next(error);
    }
}