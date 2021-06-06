const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost/friends', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(db=>console.log('Ya esta conectado'))
.catch((err)=> console.error(err));