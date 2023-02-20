import * as fs from "fs";
import slug from "../blogpost/[slug]";
// try on ==> http://localhost:3000/api/getblog?slug=learn-reactjs

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if(err){
    res.status(500).json({error:"No such Blog exists"});
    }
    console.log(req.query.slug); //it is a string so convert to json format
    res.status(200).json(JSON.parse(data));
  });
}
