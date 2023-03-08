let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }],
  },
];

/*
Input = an array of objects
Output = an array of objects with only the id and title property

Algorithm
1. iterate through the array of objects with filter,
2. declare a variable titleAndIdObjects and initialize it to the return value of a call to filter
 - for each object only keep the object in the new array if it has a id
 and title property (use object.keys and assure those two properties are in it)
3. declare a variable titleAndIdArray and initialize it to an empty array
4. iterate through the titleAndIdObjects array, for each object
add an object to titleAndIdArray { id: object[id], title: object[title]}
6. return the titleAndIdArray
*/


// function processReleaseData(data) {
//   let titleAndIdObjects = data.filter(object => {
//     let keys = Object.keys(object);
//     return keys.includes('id') && keys.includes('title')
//   });

//   let titleAndIdArray = [];

//   titleAndIdObjects.forEach(object => {
//     titleAndIdArray.push({ id: object['id'], title: object['title'] })
//   });

//   return titleAndIdArray;
// }

function processReleaseData(data) {
  let titleAndIdObjects = data.filter(object => {
    let keys = Object.keys(object);
    return keys.includes('id') && keys.includes('title');
  });

  return titleAndIdObjects.map(object => ({ id: object.id, title: object.title }));

}



console.log(processReleaseData(newReleases));

// should return:
[{ id: 70111470, title: 'Die Hard' }, { id: 675465, title: 'Fracture' }];
