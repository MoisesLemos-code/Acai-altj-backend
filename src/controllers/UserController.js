const User = require('../models/User');


module.exports = {
    async index(req, res) {
        const user = await User.findOne({ _id: req.params.id });
        return res.json(user);
    },
    async list(req, res) {
        const users = await User.find({});
        return res.json(users);
    },
    async store(req, res) {
        const { name } = req.body;

        //Verificar se já existe usuário com esse nome
        const UserExistis = await User.findOne({ name });
        if (UserExistis) {
            return res.status(400).json({ error: "Este usuário já existe!" });
        }
        //Inserir no banco de dados
        const user = await User.create(req.body);
        return res.json(user);
    },
    async destroy(req, res) {
        await User.deleteOne({ _id: req.params.id });
        return res.json({ success: "ok" });
    },
    async update(req, res) {
        const user = await User.updateOne({ _id: req.params.id }, req.body);
        return res.json(user);
    },

}