module.exports =(mongoose) => {
    const Category = mongoose.model(
        "category", mongoose.Schema({
            // id : Number,
            name: String,
            description: String,
            // price: Number,
            // description: String
        })
    )
    return Category
}