import { Request, Response } from "express";
import { Topic } from "../../models/topic.model";
import { Song } from "../../models/song.model";
import { Singer } from "../../models/singer.model";

export const index = async (req: Request, res: Response) => {
  const slugTopic: string = req.params.slugTopic;
  const topic = await Topic.findOne({
    slug: slugTopic,
    deleted: false,
    status: "active"
  });
  const songs = await Song.find({
    topicId: topic.id,
    deleted: false,
    status: "active"
  }).select("id title avatar singerId like slug");
  for (const song of songs) {
    const infoSinger = await Singer.findOne({
      _id: song.singerId,
      deleted: false
    });
    song["singerFullName"] = infoSinger ? infoSinger.fullName : "";
  }
  res.render("client/pages/songs/index", {
    pageTitle: topic.title,
    songs: songs
  });
}