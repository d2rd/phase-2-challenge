for(i =0; i < movies.length;i++){ 
        // 'i' is index for iteration. length is a property of the array that indicates the number of objects in the array.'i++' increments the iteration by 1.
          document.write('<h4>' + movies[i].title + '</h4>');
          document.write('<li>' + movies[i].year + '</li>');
          document.write('<li>' + movies[i].genre + '</li>');
          document.write('<li>' + movies[i].director + '</li>');
        } 