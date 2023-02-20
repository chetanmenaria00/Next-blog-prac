// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("blogdata",(err, data) => {
    console.log(data); //it is a string so convert to json format
    res.status(200).json(data);
  });
}
