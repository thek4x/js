function log(message)
{
    console.log(message);
    console.log(__filename);
    console.log(__dirname);

}
let name = "enes";

module.exports = {
    name: name,
    log: log
};