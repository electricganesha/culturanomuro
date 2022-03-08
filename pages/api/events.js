import { Facebook, FacebookApiException } from 'fb';

export default function handler(req, res) {
    const fb = new Facebook({ 'accessToken': process.env.FB_ACCESS_TOKEN });

    fb.api('CulturaNoMuro/events', function (apiRes) {
        try {
            if (!apiRes || apiRes.error) {
                console.log(!apiRes ? 'An error occurred' : apiRes.error);
                throw new FacebookApiException();
            }
            res.status(200).json(JSON.stringify(apiRes.data));
        } catch (err) {
            res.status(500).json(err);
        }
    });
}
