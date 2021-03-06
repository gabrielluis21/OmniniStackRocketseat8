const Dev = require('../models/Dev').default;

module.exports = {
    async store(req,res){
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetUser){
            return res.status(400).json({Error: 'Dev not exists' });
        }

        if(targetDev.likes.includes(user)){
            console.log('DEU MATCH!');
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json({Ok: true});
    }
}