// This pattern writes to the browser because it uses 'document.write'
for(i =0; i < clients.length;i++){ 
        // 'i' is index for iteration. length is a property of the array that indicates the number of objects in the array.'i++' increments the iteration by 1.
          document.write('<h4>' + movies[i].id + '</h4>');
          document.write('<li>' + movies[i].rep_name + '</li>');
          document.write('<li>' + movies[i].company + '</li>');
          document.write('<li>' + movies[i].city + '</li>');
          document.write('<li>' + movies[i].state + '</li>');
        } 


        //return an array of values that match on a certain key
function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}