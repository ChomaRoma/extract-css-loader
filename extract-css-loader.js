module.exports = content => {
    const startString = 'exports.push([module.id, "';
    const endString = '", ""]);';

    const firstIndex = content.indexOf(startString) + startString.length;
    const lastIndex = content.lastIndexOf(endString);

    return content.slice(firstIndex, lastIndex);
};