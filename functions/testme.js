export default (req, res) => {
    // console.dir(req, { depth: 1 });

    const timestamp = Date.now() / 1000 | 0;

    let ipaddress;
    if (req.headers['x-nf-client-connection-ip']) {
        ipaddress = req.headers['x-nf-client-connection-ip'];
    } else if (req.headers['x-real-ip']) {
        ipaddress = req.headers['x-real-ip'];
    } else {
        ipaddress = req.headers['x-forwarded-for'].split(',')[0];
    }

    res.status(200).json(
        {
            userAgent: req.headers['user-agent'],
            acceptLanguage: req.headers['accept-language'],
            ipaddress,
            timestamp: timestamp
        }
    );
}


