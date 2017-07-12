// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
//
// const fields = document.getElementById('fields')
//
// const field1 = document.createElement('input')
// field1.placeholder = formData[0].label
// field1.id = formData[0].id
// field1.type = formData[0].type
//
// const field2 = document.createElement('input')
// field2.placeholder = formData[1].label
// field2.id = formData[1].id
// field2.type = formData[1].type
//
// const field3 = document.createElement('input')
// field3.placeholder = formData[2].label
// field3.id = formData[2].id
// field3.type = formData[2].type
//
// const field4 = document.createElement('input')
// field4.placeholder = formData[3].label
// field4.id = formData[3].id
// field4.type = formData[3].type
//
// const field5 = document.createElement('select')
// field5.placeholder = formData[4].label
// field5.id = formData[4].id
// field5.type = formData[4].type
// // field5.options = formData[4](
// //   for (var i = 0; i < formData[i].options.length; i++) {
// //
// // })
//
// // Now we have to add all the options
// const field6 = document.createElement('textarea')
// field6.placeholder = formData[5].label
// field6.id = formData[5].id
// field6.type = formData[5].type
//
// const field7 = document.createElement('input')
// field7.placeholder = formData[6].label
// field7.id = formData[6].id
// field7.type = formData[6].type
//
// const field8 = document.createElement('input')
// field8.placeholder = formData[7].label
// field8.id = formData[7].id
// field8.type = formData[7].type
//
//
// fields.appendChild(field1)
// fields.appendChild(field2)
// fields.appendChild(field3)
// fields.appendChild(field4)
// fields.appendChild(field5)
// fields.appendChild(field6)
// fields.appendChild(field7)
// fields.appendChild(field8)


// for (var i = 0; i < formData.length; i++) {
//   formData[0]
// }










// Notes from doing a run through with Mark.

// We will create a for loop. But why? How do we know to make that for loop?  Because every object has the same fields.

// Loop through the formData
    // create the HTML
    // add to the DOM

for (var i = 0; i < formData.length; i++) {

    //Mark does this so he doesn't have to type formDatat[i] a lot
    let _data = formData[i];

    // is the same as console.log('creating HTML for ' + _data.label)
    console.log(`creating HTML for ${_data.label}`)


    if (_data.type === 'textarea'){
      // create a new element that is a textarea; WHY? because the type of the input is "textarea"
      let textarea = document.createElement('textarea')
      // textarea.type = _data.type  ----- Textarea does not have a type

      // todo: create and append textarea
      textarea.placeholder = _data.label
      textarea.id = _data.id
      document.getElementById('fields').appendChild(textarea)

    } else if (_data.type === 'select') {

        //create a drop down menu; create a new element select
        let select = document.createElement('select')
        select.id = _data.id

        let placeholder = document.createElement('option')
        placeholder.value = 0;
        placeholder.innerHTML = _data.label
        select.appendChild(placeholder)

        //We want to loop over the options and create a element for each option and append to the select
        for (var j = 0; j < _data.options.length; j++) {

          let _opt = _data.options[j]
          let option = document.createElement('option')

          option.value = _opt.value
          option.innerHTML = _opt.label


          select.appendChild(option)
        }


        document.getElementById('fields').appendChild(select)

    } else {
        //create a variable here so I can reuse and modify that new element; I called this variable element because the name is logical and has semantic meaning
        let element = document.createElement('input')


        //To set HTML attributes on a newly created/queried DOM element; the formula is element.attribute = value
        element.type = _data.type
        element.placeholder = _data.label
        element.id = _data.id

        //is the same as making a variable : const _fields = document.querySelector('#fields'); Put this last to wrap up the flow of the for loop
        document.getElementById('fields').appendChild(element)
    }

}
