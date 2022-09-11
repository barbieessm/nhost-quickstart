import testme from '../../functions/testme';
import whoami from '../../functions/whoami';

export default function handler(req, res) {
    // console.dir(req, { depth: 1 });

    const fn = Object.keys(req.query)[0];
    // if (fn === 'testme') {
    //     testme(req, res);
    // }
    return import(`../../functions/${fn}`)
    .then(mod => mod.default(req, res))
    .catch(err => {
        console.dir(err);
    });

    // res.status(200).json({ data: 'Test' });
}
