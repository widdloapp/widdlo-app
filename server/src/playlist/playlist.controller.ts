import {Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Query, Res} from "@nestjs/common";
import {PlaylistService} from "./playlist.service";
import {CreatePlaylistDto} from "../dto/create/create-playlist.dto";
import {GetPlaylistDto} from "../dto/get/get-playlist.dto";
import {CreateVideoPlaylistDto} from "../dto/create/create-video-playlist.dto";

@Controller('playlist')
export class PlaylistController {
    constructor(private readonly playlistService: PlaylistService) { }

    @Get()
    async getPlaylist(@Res() response) {
        const playlist = await this.playlistService.getPlaylistList(response.locals.user);

        return response.status(HttpStatus.OK).json({
            message: 'Playlist retrieved successfully.', playlist
        });
    }

    @Post()
    async createPlaylist(@Res() response, @Body() createPlaylistDto: CreatePlaylistDto) {
        createPlaylistDto.user = response.locals.user;

        const playlist = await this.playlistService.createPlaylist(createPlaylistDto);

        return response.status(HttpStatus.OK).json({
            message: 'Playlist successfully created.', playlist
        });
    }

    @Delete()
    async deletePlaylist(@Res() response, @Param() getPlaylistDto: GetPlaylistDto) {
        const playlist = await this.playlistService.deletePlaylist(response.iternals.user, getPlaylistDto);

        if (!playlist) {
            throw new NotFoundException("No playlist found or invalid authentication.")
        }

        return response.status(HttpStatus.OK).json({
            message: 'Playlist removed successfully.'
        });
    }

    @Get(":id")
    async getPublicPlaylist(@Res() response, @Param() getPlaylistDto: GetPlaylistDto) {
        const user = await this.playlistService.getPlaylist(response.iternals.user, getPlaylistDto);

        if (!user) {
            throw new NotFoundException('Playlist could not found!');
        }

        return response.status(HttpStatus.OK).json({
            message: 'Playlist data retrieved successfully.', user
        });
    }

    @Post(":id")
    async addVideoPlaylist(@Res() response, @Body() createVideoPlaylistDto: CreateVideoPlaylistDto) {
        const videoPlaylist = await this.playlistService.addVideoPlaylist(response.locals.user, createVideoPlaylistDto);

        return response.status(HttpStatus.OK).json({
            message: 'Video added to the playlist successfully.', videoPlaylist
        });
    }

    @Delete(":id")
    async deleteVideoPlaylist(@Res() response, getPlaylistDto: GetPlaylistDto) {
        const playlist = await this.playlistService.deletePlaylist(response.locals.user, getPlaylistDto);

        if (!playlist) {
            throw new NotFoundException('Playlist could not found!');
        }

        return response.status(HttpStatus.OK).json({
            message: 'Playlist removed successfully.', playlist
        });
    }
}
