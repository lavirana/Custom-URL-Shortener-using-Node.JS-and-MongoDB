
const { nanoid } = require("nanoid");
const url = require("../models/url");

async function handleNewShortUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "URL is required"});

    const shortId = nanoid(8);
    await url.create({
        shortId : shortId,
        redirectURL: body.url,
        visitHistory: [],
    });
return res.render('home',{
    id: shortId
})
    //return res.json({shortId: shortId});
}

async function handelAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await url.findOne({shortId});
    return res.json({totalClicks:result.visitHistory.length, analytics: result.visitHistory})
}

module.exports = {
    handleNewShortUrl,
    handelAnalytics
}