let button = document.getElementById("btn1")
let input = document.getElementById("enter")
let ul = document.querySelector("ul")
let content = document.getElementById("content")
let container = document.getElementById("container")





button.addEventListener("click", function () {
    let container = document.createElement("div");
    container.setAttribute('id', 'container')
    //    console.log(container)
    let content = document.createElement("div")
    content.setAttribute('id', 'content')
    //    console.log(content)
    container.appendChild(content)
    //    console.log(container)
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    // console.log(li)
    content.appendChild(li)
    // console.log(container)
    ul.appendChild(container)
    input.value = "";

                                                                             // done and delete button 

    let button_don = document.createElement("button")
    button_don.setAttribute('class', 'btn2')
    button_don.appendChild(document.createTextNode("Done"))
    // console.log(button_don)
    container.appendChild(button_don)

    let button_del = document.createElement("button")
    button_del.setAttribute('class', 'btn2')
    button_del.appendChild(document.createTextNode("Delete"))
    // console.log(button_don)
    container.appendChild(button_del)



                                                                          // delete button  

    // console.log(button_del)                                              
    button_del.addEventListener("click", function () {
        ul.removeChild(container)
    })

                                                                                 //done

    button_don.addEventListener("click", function () {
        // console.log(li)
        li.setAttribute('id', 'done')
    })

                                                                            // complete

   let select = document.getElementById("select")
   console.log(select)
   select.addEventListener("change", function(){

   })

})

input.addEventListener("keypress", function (event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        let container = document.createElement("div");
        container.setAttribute('id', 'container')
        //    console.log(container)
        let content = document.createElement("div")
        content.setAttribute('id', 'content')
        //    console.log(content)
        container.appendChild(content)
        //    console.log(container)
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(input.value))
        // console.log(li)
        content.appendChild(li)
        // console.log(container)
        ul.appendChild(container)
        input.value = "";

                                                                                  // done and delete button 

        let button_don = document.createElement("button")
        button_don.setAttribute('class', 'btn2')
        button_don.appendChild(document.createTextNode("Done"))
        // console.log(button_don)
        container.appendChild(button_don)

        let button_del = document.createElement("button")
        button_del.setAttribute('class', 'btn2')
        button_del.appendChild(document.createTextNode("Delete"))
        // console.log(button_don)
        container.appendChild(button_del)

                                                                              //    delete  button 
        button_del.addEventListener("click", function () {
            ul.removeChild(container)
        })

                                                                                    //  done button
        button_don.addEventListener("click", function () {
            // console.log(li)
            li.setAttribute('id', 'done')
        })
    }



})








