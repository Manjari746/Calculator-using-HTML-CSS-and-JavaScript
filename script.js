var string1 = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((item) => {
    // here e is event
    item.addEventListener('click', (e) => {

        if (e.target.innerHTML === '=') {
            try {
                string1 = eval(string1);
                document.querySelector('.input').value = string1;
            } catch (error) {
                string1 = "Invalid Operator!";
                document.querySelector('.input').value = string1;
                console.log(error); // Print the error to the console
            }
        }
        // else if (e.target.innerHTML == '**') {
        //     string1 = eval()
        // }
        else if (e.target.innerHTML == 'AC') {
            string1 = "";
            document.querySelector('.input').value = string1;
        }
        else {
            console.log(e.target);
            string1 = string1 + e.target.innerHTML;
            document.querySelector('.input').value = string1;
        }
    })
})