const cardList = [

    {
        title: "The Red Giant Star",
        image: "images/red giant.png",

        link: "About Red Giant Star",

        description: "When a star runs of hydrogen fuel in its core, it has to adjust and find alternate ways to power itself – one of the ways it does this is to start burning hydrogen outside the core and this makes the star swell up. The result is a cool, puffy red giant star. "

    },
    {
        title: "The White Dwarf Star",
        image: "images/White_Dwarf.png",

        link: "About White Dwarf Star",

        description: "When a star about the size of our Sun, or a little larger, has burnt all the material it can, it collapses into a new type of object – a kind of giant crystal supported by the wonders of quantum physics (specifically the degeneracy pressure of electrons) rather than its own heat. "

    }

]

const clickMe = () => {

    alert("Thanks for clicking me. Hope you have a nice day!")

}



const submitForm = () => {

    let formData = {};

    formData.first_name = $('#first_name').val();

    formData.last_name = $('#last_name').val();

    formData.password = $('#password').val();
    formData.email = $('#email').val();

    alert("Your response was submitted!")
    console.log("Form Data Submitted: ", formData);

}


const addCards = (items) => {

    items.forEach(item => {

        let itemToAppend = '<div class="col s4 center-align">'+

    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+

    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+    '<div class="card-reveal">'+    '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+        '<p class="card-text">'+item.desciption+'</p>'+      '</div></div></div>';

      $("#card-section").append(itemToAppend)

    });

}


$(document).ready(function(){

    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })

    addCards(cardList);

    $('.modal').modal();
  });