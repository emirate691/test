
function newFunction() {
    var checkbox = document.querySelector('input[name=mode]');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            trans();
            document.documentElement.setAttribute('data-theme', 'dartheme');
        } else {
            trans();
            document.documentElement.setAttribute('data-theme', 'lighttheme');
        }
    });

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000);
    };
}

let list=document.querySelectorAll('.navigation li');
    function activeLink() {
        list.forEach((item) => 
        item.classList.remove('hovered'));
        this.classList.add('hovered');
        
    }
    list.forEach((item) => 
    item.addEventListener('mouseover',activeLink));

 function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
};
