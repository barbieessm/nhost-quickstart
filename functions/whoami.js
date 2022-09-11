export default (req, res) => {
    const timestamp = Date.now() / 1000 | 0;
    let ipaddress;
    let language;
    let software;

    let statusCode = 500; //Internal Server Error
    try {
        if (req.headers['x-nf-client-connection-ip']) {
            ipaddress = req.headers['x-nf-client-connection-ip'];
        } else if (req.headers['x-real-ip']) {
            ipaddress = req.headers['x-real-ip'];
        } else {
            ipaddress = req.headers['x-forwarded-for'].split(',')[0];
        }
        language = req.headers['accept-language'];
        software = req.headers['user-agent'];
        statusCode = 200;
    } catch (er) {
        console.log(er);
        statusCode = 500;
    }
    // res.status(statusCode).send(
    //     JSON.stringify({ ipaddress, language, software })
    // );
    res.status(statusCode).json(
        {
            software,
            language,
            ipaddress
        }
    );
}