import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Playlist} from "./playlist.schema";
import {PlaylistVideo} from "./video-playlist.schema";
import {CreatePlaylistDto} from "../dto/create/create-playlist.dto";
import {GetPlaylistDto} from "../dto/get/get-playlist.dto";
import {CreateVideoPlaylistDto} from "../dto/create/create-video-playlist.dto";

@Injectable()
export class PlaylistService {
    constructor(@InjectModel('Playlist') private playlistModel: Model<Playlist>, @InjectModel('PlaylistVideo') private playlistVideoModel: Model<PlaylistVideo>) { }

    async createPlaylist(createPlaylistDto: CreatePlaylistDto) {
        return await this.playlistModel.create(createPlaylistDto);
    }

    async getPlaylistList(id: string) {
        const playlist = await this.playlistModel.find({user: id}).select(["date", "name", "description"]);

        return playlist;
    }

    async getPlaylist(id: string, getPlaylistDto: GetPlaylistDto) {
        const playlist = await this.playlistModel.findOne({_id: getPlaylistDto.id, hidden: false}).select(["date", "title", "description"]);

        return playlist;
    }

    async getPublicPlaylist(getPlaylistDto: GetPlaylistDto) {
        const playlist = await this.playlistModel.findOne({_id: getPlaylistDto.id, hidden: false}).select(["date", "title", "description"]);

        return playlist;
    }

    async deletePlaylist(id: string, getPlaylistDto: GetPlaylistDto) {
        const playlist = await this.playlistModel.findOneAndDelete({_id: getPlaylistDto.id, user: id});

        return playlist;
    }

    async addVideoPlaylist(id: string, createVideoPlaylistDto: CreateVideoPlaylistDto) {
        const playlist = await this.playlistModel.findOne({_id: createVideoPlaylistDto.playlist, user: id});

        if (!playlist) {
            throw new NotFoundException("No playlist found.")
        }

        if (playlist.user != id) {
            throw new UnauthorizedException("You must be the owner of the playlist.")
        }

        return await this.playlistVideoModel.create(createVideoPlaylistDto);
    }
    async deleteVideoPlaylist(id: string, createVideoPlaylistDto: CreateVideoPlaylistDto) {

        const playlist = await this.playlistModel.findOneAndDelete({_id: createVideoPlaylistDto.playlist, user: id}).lean();

        if (playlist.user != id) {
            throw new UnauthorizedException("You must be the owner of the playlist.")
        }

        return playlist;
    }
}
