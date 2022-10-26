import frequencies from './routes/frequencies';
import users from './routes/users';

export default function handler(req, res) {
    switch(req.body.route){
        case 'users':
            res.status(200).json({message: 'users'});
            break;
        case 'frequencies':
            res.status(200).json({message: 'frequencies'});
            break;
        default:
            res.status(200).json({message: true});
    }
}
  
