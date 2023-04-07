// fetching data with an API
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     let info = "";
//     data.map((values) => {
//       info = `<p>${values.completed}</p> <h2>${values.id}</h2>
//       <h4>${values.title}</h4>`;
//     });

//     document.getElementById("format").innerHTML = info;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Trying to FETCH using <--fetch()--> data from our server

fetch("https://perfect-lamb-fedora.cyclic.app/getAllPeople")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    let info = "";
    data.data.map((values) => {
      info += `<tr>
          <td>${values.name}</td>
          <td>${values.phoneNumber}</td>
          <td>${values.email}</td>
          <td>${values.Gender}</td>
          <td>${values.password}</td>
          <td>${values.id}</td>
        </tr>`;

      // info += `<div> <p>${values.phoneNumber}</p> <p>${values.name}</p>
      //        <h4>${values.Gender}</h4> <h1>${values.email}</h1> <h1>${values.password}</h1> </div>`;
    });
    document.getElementById("table").innerHTML = info;
  })
  .catch((err) => {
    console.log(err);
  });
