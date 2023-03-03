import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        // Process a POST request
        let data = await fs.promises.readdir('contactdata');//from folder contactdata it will give all file list to data
        fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body))//
        res.status(200).json(req)
    } else {
        // Handle any other HTTP method
        res.status(200).json(["allBlogs"])
        //   name, email, desc, phone
    }
}
