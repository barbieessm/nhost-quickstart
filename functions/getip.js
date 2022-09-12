export default (req, res) => {

    console.log('<< req.headers >>', req.headers);
    // console.dir(req, { depth: 2 });
    
    let ipaddress;
    if (req.headers['x-real-ip']) {
        ipaddress = req.headers['x-real-ip'];
    } else {
        ipaddress = req.headers['x-forwarded-for'].split(',')[0];
    }

    res.status(200).json(
        {
            ipaddress,
            timestamp: Date.now()
        }
    );
}



