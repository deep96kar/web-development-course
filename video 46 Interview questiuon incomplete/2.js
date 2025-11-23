// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
const number = [1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 5, 6];

function double() {
  const duplicate = number.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  console.log(duplicate);
  for (const doubles of duplicate) {
    console.log(doubles * doubles);
  }
}

double();
