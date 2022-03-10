import { Facebook, FacebookApiException } from 'fb';

const getFBData = async () => {
    const fb = new Facebook({ 'accessToken': process.env.FB_ACCESS_TOKEN });
    return fb.api('CulturaNoMuro/events');

}

export default async function handler(req, res) {
    const retrievedData = getFBData();

    retrievedData.then((data) => {
        res.status(200).json(data.data);
    });
}
